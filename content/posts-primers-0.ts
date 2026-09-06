import type { Post } from './post-types'

export const primerPosts0: Post[] = [
{
    slug: "databricks-series-data-modeling-techniques",
    title: "3 Common Data Modeling Techniques",
    date: "2026-09-06",
    category: "primer",
    excerpt:
      "A practical tour of flat, relational, and dimensional modelling — with Databricks SQL examples so you can choose the right shape for analytics and pipelines.",
    html:
      "<p>Data modelling is how you decide what your tables mean and how they relate. In Databricks you will often meet three styles: <strong>flat</strong>, <strong>relational</strong>, and <strong>dimensional</strong>. None is universally best. Each trades simplicity against flexibility, and each fits different stages of a lakehouse pipeline.</p>" +
      "<h2>Flat models</h2>" +
      "<p>A flat model is a single wide table: one row per event or entity, with many columns and little or no joining. Think of a CSV of sales with customer name, product name, and region all denormalised onto the same row. Flat models are easy to load, easy to query for beginners, and common for landing zones or feature tables.</p>" +
      "<p>The downside is redundancy. The same customer details repeat on every order row. Updates become painful, and storage grows. Flat tables also encourage analytics that are hard to reuse across teams.</p>" +
      "<pre><code>CREATE OR REPLACE TABLE sales_flat AS\nSELECT\n  order_id,\n  order_date,\n  customer_id,\n  customer_name,\n  product_id,\n  product_name,\n  quantity,\n  unit_price,\n  quantity * unit_price AS line_amount\nFROM bronze.orders_raw;</code></pre>" +
      "<p>Use flat models for exploration, machine learning feature stores, or narrow reporting extracts. Avoid them as the long-term system of record when many teams need consistent definitions.</p>" +
      "<h2>Relational models</h2>" +
      "<p>Relational modelling normalises entities into related tables: customers, products, orders, order lines. Keys link them. This is the classic OLTP and enterprise warehouse style. In Databricks it often appears in silver layers where you clean and conform source systems.</p>" +
      "<pre><code>CREATE OR REPLACE TABLE dim_customer_rel (\n  customer_id STRING PRIMARY KEY,\n  customer_name STRING,\n  email STRING,\n  city STRING\n);\n\nCREATE OR REPLACE TABLE fact_order_line_rel (\n  order_line_id STRING PRIMARY KEY,\n  order_id STRING,\n  customer_id STRING,\n  product_id STRING,\n  quantity INT,\n  unit_price DECIMAL(12,2)\n);</code></pre>" +
      "<p>Queries then join on keys:</p>" +
      "<pre><code>SELECT c.customer_name, SUM(f.quantity * f.unit_price) AS revenue\nFROM fact_order_line_rel f\nJOIN dim_customer_rel c ON f.customer_id = c.customer_id\nGROUP BY c.customer_name;</code></pre>" +
      "<p>Relational models reduce duplication and protect integrity. They can be slower for heavy analytics if you join many large tables without good partitioning and clustering. They also ask analysts to understand the schema deeply.</p>" +
      "<h2>Dimensional models</h2>" +
      "<p>Dimensional modelling organises data for analysis: <em>facts</em> hold measures (sales amount, quantity), and <em>dimensions</em> hold descriptive context (date, customer, product). The classic star schema puts one fact table at the centre with dimensions around it.</p>" +
      "<pre><code>CREATE OR REPLACE TABLE fact_sales (\n  date_key INT,\n  customer_key BIGINT,\n  product_key BIGINT,\n  quantity INT,\n  sales_amount DECIMAL(14,2)\n);\n\nCREATE OR REPLACE TABLE dim_product (\n  product_key BIGINT,\n  product_id STRING,\n  product_name STRING,\n  category STRING\n);</code></pre>" +
      "<p>Dimensional models shine for BI tools and repeated business questions: revenue by category, orders by month, churn by segment. They are usually built in gold layers after you have cleaned relational or semi-structured sources.</p>" +
      "<h2>Choosing in Databricks</h2>" +
      "<ul>" +
      "<li><strong>Bronze:</strong> keep close to source — often flat or lightly structured.</li>" +
      "<li><strong>Silver:</strong> relational or well-keyed entities for reuse.</li>" +
      "<li><strong>Gold:</strong> dimensional stars or wide flat marts for consumption.</li>" +
      "</ul>" +
      "<p>Start from the questions people ask. If analysts need flexible drill-downs across many attributes, lean dimensional. If you are integrating operational systems, lean relational. If you need a fast one-off extract, a flat table is fine — just do not pretend it is a warehouse.</p>" +
      "<p>Good modelling is less about dogma and more about clarity: every column should have a clear grain, a clear owner, and a clear path into the next layer of your lakehouse.</p>",
  },
{
    slug: "databricks-series-dimensional-modeling-kimball",
    title: "Dimensional Modeling and Kimball Architecture",
    date: "2026-09-06",
    category: "primer",
    excerpt:
      "How Kimball-style dimensional modelling maps onto a Databricks lakehouse: facts, dimensions, conformed keys, and practical design habits.",
    html:
      "<p>Kimball dimensional modelling is a practical way to design analytics data so business questions are easy to ask and hard to get wrong. In Databricks, the same ideas sit comfortably in a medallion lakehouse: cleaned silver entities feed gold stars that BI tools and SQL notebooks consume.</p>" +
      "<h2>Core ideas</h2>" +
      "<p>A <strong>fact table</strong> records measurable events at a declared grain — for example one row per order line per day. A <strong>dimension table</strong> describes the who, what, where, and when. Surrogate keys (integers or bigints you generate) link facts to dimensions so natural keys from source systems can change without breaking history.</p>" +
      "<ul>" +
      "<li><strong>Grain:</strong> state the grain in one sentence before you write DDL.</li>" +
      "<li><strong>Additive measures:</strong> prefer amounts you can sum safely across dimensions.</li>" +
      "<li><strong>Conformed dimensions:</strong> shared date, customer, and product dims across marts.</li>" +
      "</ul>" +
      "<h2>Star schema shape</h2>" +
      "<p>In a star, the fact sits in the middle. Dimensions hang off it with few joins. Snowflakes normalise dimensions further (product to category to department). Stars are usually simpler for analysts; snowflakes can reduce duplication but add join complexity.</p>" +
      "<pre><code>CREATE OR REPLACE TABLE gold.fact_orders (\n  order_date_key INT NOT NULL,\n  customer_key BIGINT NOT NULL,\n  product_key BIGINT NOT NULL,\n  order_id STRING NOT NULL,\n  quantity INT,\n  net_amount DECIMAL(14,2),\n  CONSTRAINT pk_fact_orders PRIMARY KEY (order_id, product_key)\n);\n\nCREATE OR REPLACE TABLE gold.dim_date (\n  date_key INT PRIMARY KEY,\n  full_date DATE,\n  year INT,\n  month_name STRING,\n  fiscal_quarter STRING\n);</code></pre>" +
      "<h2>Slowly changing dimensions</h2>" +
      "<p>Customer attributes change. Kimball Type 1 overwrites the current value. Type 2 keeps history with effective dates or version rows. In Databricks, Delta tables make Type 2 practical: merge new versions, expire old ones, and point facts at the correct surrogate key for that point in time.</p>" +
      "<pre><code>-- Conceptual Type 2 pattern\nMERGE INTO gold.dim_customer t\nUSING staging.customer_changes s\nON t.customer_id = s.customer_id AND t.is_current = true\nWHEN MATCHED AND t.email &lt;&gt; s.email THEN UPDATE SET\n  t.is_current = false,\n  t.valid_to = current_date()\nWHEN NOT MATCHED THEN INSERT *;</code></pre>" +
      "<p>Keep SCD logic in one place (a notebook job or dbt model) so every mart inherits the same history rules.</p>" +
      "<h2>Kimball on a lakehouse</h2>" +
      "<p>Classic Kimball assumed a relational warehouse bus. On Databricks you still want a <em>bus</em>: shared conformed dimensions published once, then reused. What changes is storage and compute — Delta Lake, Unity Catalog, and SQL warehouses — not the modelling discipline.</p>" +
      "<ol>" +
      "<li>Define business processes and grains with stakeholders.</li>" +
      "<li>Build conformed dimensions in gold (date, customer, product).</li>" +
      "<li>Load facts with surrogate keys and declared additive measures.</li>" +
      "<li>Document grain, sources, and refresh cadence in the catalogue.</li>" +
      "</ol>" +
      "<h2>Practical habits</h2>" +
      "<p>Name tables clearly (<code>fact_</code> and <code>dim_</code>). Avoid putting descriptive text on facts. Prefer integer date keys for pruning. Partition large facts by date when queries filter that way, and liquid-cluster or Z-order high-cardinality join keys when needed.</p>" +
      "<p>Kimball is not ceremony for its own sake. It is a shared language: when someone says \"the grain is one shipment per day\", everyone knows what a duplicate means and which dashboard is trustworthy. That clarity is what makes dimensional modelling worth learning in Databricks.</p>",
  },
{
    slug: "databricks-series-analytics-query-patterns",
    title: "Common Analytics Query Patterns",
    date: "2026-09-06",
    category: "primer",
    excerpt:
      "Reusable SQL patterns for analytics on Databricks: filters, aggregations, window functions, cohort logic, and star-schema joins.",
    html:
      "<p>Most analytics work is a small set of patterns repeated with different columns. Learn the patterns once, and Databricks SQL (or Spark SQL) becomes much faster to write — and easier to review.</p>" +
      "<h2>Filter then aggregate</h2>" +
      "<p>Start with a clear grain, filter early, then group. Push predicates that prune partitions (especially date) as close to the base table as you can.</p>" +
      "<pre><code>SELECT\n  product_category,\n  SUM(net_amount) AS revenue,\n  COUNT(DISTINCT order_id) AS orders\nFROM gold.fact_orders f\nJOIN gold.dim_product p ON f.product_key = p.product_key\nJOIN gold.dim_date d ON f.order_date_key = d.date_key\nWHERE d.full_date BETWEEN DATE '2026-01-01' AND DATE '2026-03-31'\nGROUP BY product_category\nORDER BY revenue DESC;</code></pre>" +
      "<h2>Time series and period comparisons</h2>" +
      "<p>Window functions compare a row to its neighbours without collapsing the grain. Use them for running totals, previous-period values, and moving averages.</p>" +
      "<pre><code>SELECT\n  full_date,\n  daily_revenue,\n  LAG(daily_revenue, 7) OVER (ORDER BY full_date) AS revenue_7d_ago,\n  AVG(daily_revenue) OVER (\n    ORDER BY full_date\n    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW\n  ) AS moving_avg_7d\nFROM daily_sales;</code></pre>" +
      "<h2>Ranking and top-N</h2>" +
      "<p>Rank within a partition when stakeholders ask for \"top products per region\". Prefer <code>ROW_NUMBER</code> when you need a deterministic single winner, and <code>DENSE_RANK</code> when ties should share a rank.</p>" +
      "<pre><code>WITH ranked AS (\n  SELECT\n    region,\n    product_name,\n    revenue,\n    ROW_NUMBER() OVER (\n      PARTITION BY region\n      ORDER BY revenue DESC\n    ) AS rn\n  FROM region_product_revenue\n)\nSELECT * FROM ranked WHERE rn &lt;= 5;</code></pre>" +
      "<h2>Cohorts and retention sketches</h2>" +
      "<p>Cohort analysis groups users by first activity month, then tracks return activity. Keep the cohort assignment in a reusable view so dashboards stay consistent.</p>" +
      "<pre><code>WITH first_order AS (\n  SELECT customer_key, MIN(full_date) AS cohort_date\n  FROM gold.fact_orders f\n  JOIN gold.dim_date d ON f.order_date_key = d.date_key\n  GROUP BY customer_key\n)\nSELECT\n  date_trunc('MONTH', fo.cohort_date) AS cohort_month,\n  date_trunc('MONTH', d.full_date) AS activity_month,\n  COUNT(DISTINCT f.customer_key) AS active_customers\nFROM gold.fact_orders f\nJOIN gold.dim_date d ON f.order_date_key = d.date_key\nJOIN first_order fo ON f.customer_key = fo.customer_key\nGROUP BY 1, 2;</code></pre>" +
      "<h2>Star joins and bridge tables</h2>" +
      "<p>Join facts to dimensions on surrogate keys. When a fact relates to many values of one dimension (for example an order with many promotions), use a bridge table rather than exploding the fact grain silently.</p>" +
      "<h2>Semi-additive and careful measures</h2>" +
      "<p>Not everything sums. Account balances and inventory snapshots are semi-additive: you may sum across products but not across days. Document that in the catalogue and encode it in metrics views so tools do not invent wrong totals.</p>" +
      "<ul>" +
      "<li>Use <code>SUM</code> for additive facts like revenue and quantity.</li>" +
      "<li>Use last-in-period logic for snapshots.</li>" +
      "<li>Prefer distinct counts only when the grain truly requires them — they are expensive.</li>" +
      "</ul>" +
      "<h2>Make patterns reusable</h2>" +
      "<p>Wrap stable logic in views or metric layers. Keep notebooks for exploration, not as the only definition of \"monthly revenue\". When a pattern shows up three times, promote it. That is how analytics teams stay organised as the lakehouse grows.</p>",
  },
{
    slug: "databricks-series-apache-spark",
    title: "Processing Big Data with Apache Spark in Databricks",
    date: "2026-09-06",
    category: "primer",
    excerpt:
      "How Apache Spark powers Databricks workloads: DataFrames, transformations, partitioning, and practical habits for reliable large-scale processing.",
    html:
      "<p>Apache Spark is the distributed engine underneath most Databricks data engineering. You write transformations against DataFrames (or SQL), and Spark plans them across a cluster. Understanding a few core ideas — lazy evaluation, partitions, shuffle, and caching — pays off quickly when jobs slow down or spill to disk.</p>" +
      "<h2>DataFrames, not rows in a loop</h2>" +
      "<p>Spark works best when you describe <em>what</em> you want in bulk operations: filter, select, join, aggregate. Avoid collecting large results to the driver or writing Python loops over partitions unless you truly need custom logic via pandas UDFs or mapInPandas.</p>" +
      "<pre><code>from pyspark.sql import functions as F\n\ndf = spark.table(\"silver.orders\")\nclean = (\n  df\n  .filter(F.col(\"order_date\") &gt;= \"2026-01-01\")\n  .withColumn(\"line_amount\", F.col(\"quantity\") * F.col(\"unit_price\"))\n  .groupBy(\"customer_id\")\n  .agg(F.sum(\"line_amount\").alias(\"revenue\"))\n)\nclean.write.mode(\"overwrite\").saveAsTable(\"gold.customer_revenue\")</code></pre>" +
      "<h2>Lazy plans and actions</h2>" +
      "<p>Transformations build a logical plan. Actions such as <code>count</code>, <code>collect</code>, <code>show</code>, or a write trigger execution. That laziness lets Catalyst optimise the whole pipeline. Chain filters before wide joins when you can, and prefer SQL or DataFrame APIs over opaque UDFs so the optimiser can see your intent.</p>" +
      "<h2>Partitions and shuffle</h2>" +
      "<p>Data is split into partitions processed in parallel. A <strong>shuffle</strong> redistributes data for joins and group-bys. Shuffles are expensive: they move bytes across the network and can create skew when one key dominates.</p>" +
      "<ul>" +
      "<li>Filter and project early to shrink shuffle input.</li>" +
      "<li>Broadcast small dimension tables with <code>broadcast()</code> or rely on auto-broadcast hints when sizes allow.</li>" +
      "<li>Watch for skew — salting keys or Adaptive Query Execution (AQE) can help.</li>" +
      "</ul>" +
      "<pre><code>from pyspark.sql.functions import broadcast\n\nfacts = spark.table(\"gold.fact_orders\")\ndim_prod = spark.table(\"gold.dim_product\")\njoined = facts.join(broadcast(dim_prod), \"product_key\")</code></pre>" +
      "<h2>Delta Lake and Spark together</h2>" +
      "<p>In Databricks you usually read and write Delta tables. ACID transactions, time travel, and <code>MERGE</code> make incremental pipelines safer than raw Parquet folders. Combine Spark transformations with Delta features: optimise layout, vacuum old files carefully, and use Change Data Feed when downstream jobs need only the deltas.</p>" +
      "<h2>Cluster and job habits</h2>" +
      "<ol>" +
      "<li>Use job clusters for scheduled work; keep interactive clusters for development.</li>" +
      "<li>Size for the shuffle-heavy stages, not only the scan.</li>" +
      "<li>Prefer Photon-accelerated SQL warehouses for BI-shaped queries when available.</li>" +
      "<li>Log metrics: rows in, rows out, duration, and data skipped by partition pruning.</li>" +
      "</ol>" +
      "<h2>When Spark is the right tool</h2>" +
      "<p>Spark shines for large batch and micro-batch ETL, feature engineering, and joins that no longer fit on a single machine. For lightweight transforms on small tables, a SQL warehouse query may be simpler and cheaper. Match the engine to the data volume and latency, not to habit.</p>" +
      "<p>Think in DataFrames, respect the shuffle, and keep tables in Delta with clear layers. That combination is the everyday craft of processing big data in Databricks.</p>",
  },
{
    slug: "databricks-series-data-pipelines",
    title: "Building Data Pipelines in Databricks",
    date: "2026-09-06",
    category: "primer",
    excerpt:
      "A practical guide to Databricks pipelines: medallion layers, incremental loads, orchestration, quality checks, and operational habits that keep data trustworthy.",
    html:
      "<p>A data pipeline moves information from sources to something people can trust — tables, dashboards, or models — on a schedule and with clear ownership. In Databricks that usually means notebooks or workflows reading raw files or CDC streams, writing Delta tables through bronze, silver, and gold layers, and publishing into Unity Catalog.</p>" +
      "<h2>Medallion layers as a contract</h2>" +
      "<ul>" +
      "<li><strong>Bronze:</strong> append-only landing, schema-on-read or lightly typed, retain source quirks.</li>" +
      "<li><strong>Silver:</strong> cleaned, deduplicated, conformed entities and events.</li>" +
      "<li><strong>Gold:</strong> business marts, dimensional models, and aggregates for consumption.</li>" +
      "</ul>" +
      "<p>Treat each layer as a contract. Downstream jobs should not reach into bronze for business logic. That separation keeps reprocessing and debugging organised when a source changes shape.</p>" +
      "<h2>Incremental over full reload</h2>" +
      "<p>Prefer incremental processing: read only new files, new partitions, or Change Data Feed rows, then merge into silver. Full reloads are fine for small dimensions; they become costly and slow for large facts.</p>" +
      "<pre><code>-- Merge daily increments into silver\nMERGE INTO silver.orders t\nUSING staging.orders_day s\nON t.order_id = s.order_id\nWHEN MATCHED THEN UPDATE SET *\nWHEN NOT MATCHED THEN INSERT *;</code></pre>" +
      "<p>Idempotency matters. Re-running yesterday's job should not double-count. Use deterministic keys, merge logic, and partition overlays so retries are safe.</p>" +
      "<h2>Orchestration with Workflows</h2>" +
      "<p>Databricks Workflows (jobs) chain tasks: ingest, transform, test, and notify. Keep tasks small and explicit — one responsibility per task — so failures are easy to isolate. Pass parameters for run dates rather than hard-coding paths inside notebooks.</p>" +
      "<ol>" +
      "<li>Ingest to bronze (Auto Loader or batch copy).</li>" +
      "<li>Transform to silver with validation.</li>" +
      "<li>Build gold marts.</li>" +
      "<li>Run data quality checks and refresh downstream caches.</li>" +
      "</ol>" +
      "<h2>Quality and observability</h2>" +
      "<p>Pipelines without checks eventually lie. Add expectations at silver: non-null keys, valid ranges, referential integrity samples. Quarantine bad rows instead of failing silently. Emit row counts and freshness metrics so on-call engineers can see whether gold is stale before stakeholders do.</p>" +
      "<pre><code>from pyspark.sql import functions as F\n\nsilver = spark.table(\"silver.orders\")\nassert silver.filter(F.col(\"order_id\").isNull()).count() == 0\nfreshness_hours = (\n  spark.sql(\n    \"SELECT (unix_timestamp() - unix_timestamp(MAX(_ingested_at))) / 3600 \"\n    \"FROM silver.orders\"\n  ).first()[0]\n)</code></pre>" +
      "<h2>Governance and environments</h2>" +
      "<p>Use Unity Catalog for permissions and lineage. Separate dev, staging, and prod catalogues or schemas. Promote code through repos and job definitions, not by editing production notebooks by hand. Secrets belong in secret scopes, never in cells.</p>" +
      "<h2>Design for change</h2>" +
      "<p>Sources evolve. Version schemas thoughtfully, prefer additive columns, and document breaking changes. Keep visualisation and BI tools pointed at gold views so you can rearrange physical tables without breaking every dashboard.</p>" +
      "<p>Good Databricks pipelines are boring in the best way: incremental, tested, observable, and layered. When those habits are in place, modelling and analytics work can move quickly without sacrificing trust.</p>",
  }
]
