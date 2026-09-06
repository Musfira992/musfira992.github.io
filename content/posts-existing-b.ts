import type { Post } from './post-types'

export const existingPostsB: Post[] = [{
    slug: 'courage-purpose-and-growth',
    title: 'Courage, Purpose and Growth',
    date: '2026-01-18',
    category: 'blog',
    excerpt:
      'A personal reflection on risk-aversion, incremental growth, and finding purpose that aligns with lasting values rather than external validation.',
    html: `<p>In this post I reflect and share some lessons life taught me.</p><p>Throughout history, people have struggled with a lasting tension between what society expects and how individuals truly want to spend their hours and days.</p><p>Society often pushes us toward a path where we take the risk-averse approach: get a degree, because it offers stability, practicality, and predictability, while the human spirit longs for creativity, meaning, and authenticity.</p><p>This conflict is not just external but also internal. Each person's way of thinking, shaped by biology, upbringing, and experience, affects how they assess risk and make choices. These influences often lead to hesitation and self-doubt, creating a sense of inner conflict. Yet, beneath that uncertainty lies a quiet voice — a sense of unease that points toward something deeper: a calling to become one's true self. Answering that call requires courage. Growth happens when we face uncertainty instead of avoiding it. Faith, in this sense, is not blind belief but a steady trust in one's potential and in the meaning of effort itself.</p><p>Personal growth does not happen all at once — it's incremental and builds slowly, through steady practice and small improvements. Much like training in sports, success comes from showing up every day, learning from failure, and continuing to improve. Each small act of effort contributes to a larger whole, and over time, persistence forms the foundation of mastery.</p><p>However, the pursuit of purpose can go astray when it becomes self-centered or focused on external validation. Goals driven by ego or the need to impress others often lead to frustration and emptiness. True purpose, by contrast, aligns with lasting values. I like the field of biology and plant sciences — studying nature encourages humility and curiosity, reminding us of our place in a vast, interconnected world.</p><p>The philosophy of <em>Ubuntu</em>, the idea that "I am because we are," shows how meaning can come from serving others, whether through small acts of kindness or by doing one's work with care.</p><p>A balanced life is one that makes room for both ambition and rest, independence and community, setting the essential elements for one's well-being. Finally, I also realized that a life guided by the idea of minimizing regret — making choices that our future selves will respect — creates ongoing motivation and joy. In the end, faith is not the absence of doubt but the ability to move through it. Confidence grows from repeated engagement with the unknown. Therefore, true strength is both moral and spiritual: the courage to act with integrity, to support others, and to keep improving oneself.</p><p>When guided by faith and purpose, words and ideas gain the power to transform. They shape not only the world around us but also the people we become through teaching, mentoring, and the everyday courage to speak truth and pursue meaning. <em>It's the artist's job not to succumb to despair but to find an antidote to the emptiness of existence. Find your voice clear and lively — don't be such a defeatist.</em></p>`,
  },
  {
    slug: 'databricks-series-sql-fundamentals',
    title: 'DataBricks Series - SQL Fundamentals',
    date: '2025-11-18',
    category: 'primer',
    excerpt:
      'The core SQL patterns worth mastering first — filtering, aggregation, joins, CTEs, window functions, and indexing — with runnable examples against a students table.',
    html: `<p>SQL (Structured Query Language) is a standardized programming language used to manage, query, and manipulate relational databases. It allows users to retrieve, update, insert, and delete data efficiently.</p><p>If you're learning SQL, I'd recommend focusing on the following topics:</p><ul><li>SELECT + WHERE + JOIN (most used)</li><li>GROUP BY + HAVING (summarizing data)</li><li>ORDER BY + LIMIT (controlling results)</li><li>CTEs + Subqueries (for complex logic)</li><li>Window Functions (advanced analytics)</li><li>Indexes (for performance tuning)</li></ul><p>We will focus on the most-used concepts, which upon mastery will allow you to accomplish 80% of typical query tasks.</p><ol><li><strong>Basic Querying (SELECT, FROM, WHERE)</strong></li></ol><p>Let's assume we are tasked with loading data from a students table for students who have achieved grades &gt; 85.</p><pre><code>SELECT *
FROM students
WHERE grade &gt;= 85;</code></pre><p>In this query, <code>SELECT *</code> tells the SQL engine to load all available columns in the table students and apply the filter to the grade column.</p><ol start="2"><li><strong>Filtering Data (WHERE, AND, OR, IN, LIKE, BETWEEN)</strong></li></ol><pre><code>SELECT * FROM students
WHERE grade BETWEEN 80 AND 90
AND department IN ('Computer Science', 'Math');</code></pre><ol start="3"><li><strong>Sorting and Limiting Results (ORDER BY, LIMIT)</strong></li></ol><pre><code>SELECT * FROM students
ORDER BY grade DESC
LIMIT 10;</code></pre><ol start="4"><li><strong>Aggregation (COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING)</strong></li></ol><pre><code>SELECT department, AVG(grade) AS avg_grade
FROM students
GROUP BY department
HAVING AVG(grade) &gt; 80;</code></pre><p>Here we can replace AVG with any of the following:</p><ul><li>COUNT (count rows)</li><li>SUM (total sum of values)</li><li>AVG (average value)</li><li>MIN/MAX (smallest/largest value)</li><li>GROUP BY (aggregates by category)</li><li>HAVING (filters aggregated results)</li></ul><h3>5. Joins (INNER, LEFT, RIGHT, FULL)</h3><pre><code>SELECT s.first_name, s.last_name, c.course_name
FROM students s
INNER JOIN enrollments e ON s.student_id = e.student_id
INNER JOIN courses c ON e.course_id = c.course_id;</code></pre><ol start="6"><li><strong>Subqueries (Nested Queries)</strong></li></ol><pre><code>SELECT first_name, last_name
FROM students
WHERE student_id IN (
  SELECT student_id FROM enrollments WHERE course_id = 101
);</code></pre><ol start="7"><li><strong>Common Table Expressions (CTEs)</strong></li></ol><pre><code>WITH top_students AS (
  SELECT student_id, grade FROM students WHERE grade &gt; 90
)
SELECT s.first_name, s.last_name, t.grade
FROM top_students t
JOIN students s ON s.student_id = t.student_id;</code></pre><p><code>WITH</code> defines temporary query results.</p><ol start="8"><li><strong>Window Functions (OVER, PARTITION BY)</strong></li></ol><pre><code>SELECT student_id, grade,
  RANK() OVER (PARTITION BY course_id ORDER BY grade DESC) AS rank
FROM enrollments;</code></pre><p>Concepts to know:</p><ul><li>OVER (defines how results are computed)</li><li>PARTITION BY (grouping for window calculations)</li><li>RANK(), DENSE_RANK(), ROW_NUMBER() (ranking functions)</li></ul><ol start="9"><li><strong>Updating Data (INSERT, UPDATE, DELETE)</strong></li></ol><pre><code>UPDATE students
SET grade = 95
WHERE student_id = 101;

INSERT INTO students (first_name, last_name, grade)
VALUES ('John', 'Doe', 88);

DELETE FROM students WHERE grade &lt; 50;</code></pre><p>Extensions that are super important to know:</p><ul><li>INSERT INTO (adds new records)</li><li>UPDATE (modifies existing records)</li><li>DELETE (removes records)</li></ul><p>Note: Always use WHERE with <strong>UPDATE</strong> and <strong>DELETE</strong> to prevent accidental changes!</p><ol start="10"><li><strong>Indexing for Performance (INDEX, EXPLAIN)</strong></li></ol><pre><code>CREATE INDEX idx_students ON students (last_name);</code></pre><p><strong>Concepts to know:</strong></p><ul><li>CREATE INDEX (speeds up searches)</li><li>EXPLAIN (analyzes query execution plan)</li></ul>`,
  },
  {
    slug: 'hello-julia',
    title: 'Hello Julia',
    date: '2025-11-18',
    category: 'primer',
    excerpt:
      'A quick tour of the Julia programming language — its performance story, its scientific-computing ecosystem, and how to get started with Pluto notebooks.',
    html: `<p>Experts are saying Julia "looks like Python, feels like Lisp, runs like Fortran." That made me curious, so I decided to explore more. Here is a summary of what I found.</p><p>Julia is a general-purpose, interpreted language developed by a group at MIT, with numerical computing at the core of its design. It was first released in 2012 and slowly matured to a point where version 1.0 was launched in 2018 (currently at v1.7). At its core, Julia is a high-level, dynamic programming language that offers performance approaching that of statically-typed languages like C++, and is increasingly being used by a huge number of universities and tech companies.</p><ul><li><strong>Performance</strong>: Julia, just like Python, is a dynamic language with optional types. In Python types can change at run-time, costing an overhead as compared to C, which is statically typed. However, Julia uses multiple dispatch, which makes defining types optional, so defining types doesn't lead to that performance boost.</li></ul><p>Some bragging rights highlighted by MIT at the v1.0 launch:</p><blockquote>Julia is the only high-level dynamic programming language in the "petaflop club," having achieved 1.5 petaflop/s using 1.3 million threads, 650,000 cores and 9,300 Knights Landing (KNL) nodes to catalogue 188 million stars, galaxies, and other astronomical objects in 14.6 minutes on the world's sixth-most powerful supercomputer.</blockquote><blockquote>"The release of Julia 1.0 signals that Julia is now ready to change the technical world by combining the high-level productivity and ease of use of Python and R with the lightning-fast speed of C++," Edelman says.</blockquote><p><strong>Rich data science and visualisation libraries:</strong> From a data science perspective, anyone who is already pushing the boundaries of Python and is interested in high-performance numerical computing should definitely give Julia a try. Developing high-performance libraries focusing on scientific computing and numerical computation has been prioritised since day one. This means Julia solves the "two language problem," letting you quickly convert prototypes into high-performance implementations without the extra overhead of shifting between two different languages. It is quite similar to Python syntactically, plus you can use all your existing Python libraries in it. You can also call C and Fortran libraries natively.</p><p><strong>Try Julia for data science:</strong> How to get started? MIT has made available a free online course called Introduction to Computational Thinking to help you get started with fundamental concepts of programming with Julia. In addition, the official YouTube channel of Julia is a treasure trove of discussions on advanced topics such as dynamic type systems, parametric polymorphism/multiple dispatch, Lisp-like macros, distributed computing, garbage collection, and libraries for floating point calculations.</p><p>I would also recommend installing Pluto, an interactive-computing environment (reactive notebook) for Julia with intelligent syntax analysis. It also comes with an important guarantee: "At any instant, the program state is completely described by the code you see." That makes it more promising than using Jupyter notebooks or MATLAB. Lastly, this cheatsheet will come in handy: <a href="https://github.com/mitmath/julia-mit/blob/master/Julia-cheatsheet.pdf">github.com/mitmath/julia-mit</a></p>`,
  },
  {
    slug: 'chemprop-drug-discovery-on-databricks',
    title: 'AI Drug Discovery Made Easy: Your Complete Guide to Chemprop on Databricks',
    date: '2026-08-20',
    category: 'project',
    excerpt:
      'Notes on using Chemprop — a directed message-passing graph neural network for molecular property prediction — as a managed workflow on Databricks, from loading pretrained models to training multi-task ADMET regressors.',
    html: `<p><em>These are my notes on a Databricks Community technical blog post, <a href="https://community.databricks.com/t5/technical-blog/ai-drug-discovery-made-easy-your-complete-guide-to-chemprop-on/ba-p/111750" rel="noopener noreferrer">"AI Drug Discovery Made Easy: Your Complete Guide to Chemprop on Databricks."</a> All credit for the original workflow and code goes to the Databricks authors — see the link for the full walkthrough and runnable notebooks.</em></p>

<p>Computational drug discovery got a well-known proof point in 2020, when a graph neural network flagged halicin, a compound already sitting in a screening library, as a candidate antibiotic with a structure unlike anything in existing drug classes. That's the pitch for pairing a chemistry-aware model like Chemprop with a platform like Databricks: search chemical space faster, and do it on infrastructure that also handles the data engineering and deployment side.</p>

<h3>What Chemprop actually models</h3>
<p>Chemprop is a directed message-passing neural network (D-MPNN) built specifically for molecules. Instead of hand-engineered chemical descriptors, it treats a molecule as a graph — atoms as nodes, bonds as edges — and runs several rounds of message passing so that information about neighboring atoms and bonds propagates through the structure. The result is a learned molecular fingerprint that feeds into a feed-forward network for the actual prediction task, whether that's a classification (toxic / non-toxic) or a regression (solubility, binding affinity, an ADMET property).</p>

<h3>Why run it on Databricks specifically</h3>
<p>The argument isn't that Databricks changes the modeling — it's that it removes friction around everything adjacent to modeling. Unity Catalog gives you a governed, discoverable place to keep datasets and registered models so a chemistry team and a data engineering team aren't passing CSVs around. MLflow handles experiment tracking and model registry, so a trained Chemprop model can be logged, versioned, and served without a bespoke deployment pipeline. For a workflow that moves from raw SMILES strings to a served prediction endpoint, having compute, governance, and serving in one place is the practical win.</p>

<h3>The four workflows the guide walks through</h3>
<p>The Databricks post runs these against Unity Catalog data and MLflow's registry. To show what's actually happening underneath, the snippets below are trimmed straight from Chemprop's own <a href="https://github.com/chemprop/chemprop/tree/main/examples" rel="noopener noreferrer">example notebooks</a> (Chemprop is MIT-licensed) — Databricks just wraps this with governed data access and managed serving.</p>

<p><strong>1. Inference with a pretrained model</strong> — loading an existing Chemprop checkpoint and scoring new molecules for a property like aqueous solubility, with no training step at all.</p>
<pre><code>from pathlib import Path
import numpy as np
import pandas as pd
import torch
from lightning import pytorch as pl
from chemprop import data, featurizers, models

chemprop_dir = Path.cwd().parent
checkpoint_path = chemprop_dir / "tests" / "data" / "example_model_v2_regression_mol.ckpt"
mpnn = models.MPNN.load_from_checkpoint(checkpoint_path)

test_path = chemprop_dir / "tests" / "data" / "regression" / "mol" / "mol.csv"
df_test = pd.read_csv(test_path)
smis = df_test["smiles"]

test_data = [data.MoleculeDatapoint.from_smi(smi) for smi in smis]
featurizer = featurizers.SimpleMoleculeMolGraphFeaturizer()
test_dset = data.MoleculeDataset(test_data, featurizer=featurizer)
test_loader = data.build_dataloader(test_dset, shuffle=False)

with torch.inference_mode():
    trainer = pl.Trainer(logger=None, accelerator="cpu", devices=1)
    test_preds = trainer.predict(mpnn, test_loader)

df_test["pred"] = np.concatenate(test_preds, axis=0)</code></pre>

<p><strong>2. Training a single-task classifier</strong> — fine-tuning Chemprop on a labeled dataset for a binary property such as toxicity.</p>
<pre><code>from pathlib import Path
import pandas as pd
from lightning import pytorch as pl
from chemprop import data, featurizers, models, nn

input_path = Path.cwd().parent / "tests" / "data" / "classification" / "mol.csv"
target_columns = ["NR-AhR", "NR-ER", "SR-ARE", "SR-MMP"]

df_input = pd.read_csv(input_path)
smis = df_input.loc[:, "smiles"].values
ys = df_input.loc[:, target_columns].values
all_data = [data.MoleculeDatapoint.from_smi(smi, y) for smi, y in zip(smis, ys)]

mols = [d.mol for d in all_data]
train_indices, val_indices, test_indices = data.make_split_indices(mols, "random", (0.8, 0.1, 0.1))
train_data, val_data, test_data = data.split_data_by_indices(all_data, train_indices, val_indices, test_indices)

featurizer = featurizers.SimpleMoleculeMolGraphFeaturizer()
train_dset = data.MoleculeDataset(train_data[0], featurizer)
val_dset = data.MoleculeDataset(val_data[0], featurizer)
test_dset = data.MoleculeDataset(test_data[0], featurizer)

train_loader = data.build_dataloader(train_dset)
val_loader = data.build_dataloader(val_dset, shuffle=False)
test_loader = data.build_dataloader(test_dset, shuffle=False)

mp = nn.BondMessagePassing()
agg = nn.MeanAggregation()
ffn = nn.BinaryClassificationFFN(n_tasks=len(target_columns))
mpnn = models.MPNN(mp, agg, ffn, batch_norm=False)

trainer = pl.Trainer(
    accelerator="cpu", devices=1, max_epochs=20, enable_checkpointing=True,
)
trainer.fit(mpnn, train_loader, val_loader)
results = trainer.test(mpnn, test_loader)</code></pre>

<p><strong>3. Serving via MLflow's registry</strong> — pulling a registered model back out of Unity Catalog/MLflow for inference, which is the pattern you'd actually use once a model is production-bound rather than sitting in a notebook. This part is Databricks/MLflow plumbing rather than Chemprop code, so see the original post for that snippet.</p>

<p><strong>4. Multi-task ADMET regression</strong> — training one model to predict several absorption/distribution/metabolism/excretion/toxicity endpoints simultaneously, which is closer to how a real drug-candidate triage pipeline would be structured than any single-property demo.</p>
<pre><code>from pathlib import Path
import torch
import pandas as pd
from lightning import pytorch as pl
from chemprop import data, models, nn

input_path = Path.cwd().parent / "tests" / "data" / "regression" / "mol_multitask.csv"
target_columns = ["mu", "alpha", "homo", "lumo", "gap", "r2", "zpve", "cv", "u0", "u298", "h298", "g298"]

df_input = pd.read_csv(input_path)
smis = df_input.loc[:, "smiles"].values
ys = df_input.loc[:, target_columns].values
datapoints = [data.MoleculeDatapoint.from_smi(smi, y) for smi, y in zip(smis, ys)]

split_indices = data.make_split_indices(datapoints)
train_data, val_data, test_data = data.split_data_by_indices(datapoints, *split_indices)
train_dset = data.MoleculeDataset(train_data[0])
val_dset = data.MoleculeDataset(val_data[0])
test_dset = data.MoleculeDataset(test_data[0])

output_scaler = train_dset.normalize_targets()
val_dset.normalize_targets(output_scaler)
train_loader = data.build_dataloader(train_dset)
val_loader = data.build_dataloader(val_dset)
test_loader = data.build_dataloader(test_dset)

output_transform = nn.transforms.UnscaleTransform.from_standard_scaler(output_scaler)
ffn = nn.RegressionFFN(n_tasks=len(target_columns), output_transform=output_transform)
chemprop_model = models.MPNN(nn.BondMessagePassing(), nn.MeanAggregation(), ffn)

trainer = pl.Trainer(logger=False, enable_checkpointing=False, max_epochs=1)
trainer.fit(chemprop_model, train_loader, val_loader)

preds = trainer.predict(chemprop_model, test_loader)
preds = torch.concat(preds, axis=1)</code></pre>

<h3>Takeaway</h3>
<p>The interesting part isn't that Chemprop works — message-passing GNNs for molecular property prediction are well established — it's the integration story: a specialized chemistry model dropped into a general-purpose data platform's governance and serving layer, so the same infrastructure that tracks a churn model can track a toxicity classifier. Worth reading the full post for the actual notebook code and the ADMET multi-task setup in detail.</p>`,
  },
  {
    slug: 'enhancing-nutrient-use-efficiency-for-sustainable-agriculture',
    title: 'Enhancing Nutrient Use Efficiency for Sustainable Agriculture',
    date: '2025-11-12',
    category: 'project',
    excerpt:
      'The traditional ratio-based definition of nitrogen use efficiency is statistically flawed. This post walks through the regression alternatives evaluated in my Master’s research and why they matter for sustainable crop management.',
    html: `<p>In this blog post, we begin with the real-world challenge of improving nutrient use efficiency in modern agriculture. We introduce the research gap by showing that although NUE is widely used, its traditional ratio-based definition is statistically flawed. We then highlight the key contribution of this work — evaluating alternative statistical models to more accurately quantify nitrogen responsiveness. The post showcases the core results and explains why they matter for sustainable crop management. Finally, we conclude with the broader implications for agricultural research, nutrient stewardship, and future food security.</p><p><strong>Introduction and Background</strong></p><p>Modern agriculture faces a looming threat of food scarcity and heightened pressure on natural resources to sustain increasing food demand. Improving nutrient use efficiency is crucial to achieving sustainable food production.</p><p>One of the most significant changes in agricultural productivity in recent history was the Green Revolution, a period of technological and agronomic advancements that helped sustain the growing world population through the development of input-responsive, high-yielding varieties of wheat and rice. However, the human population is expected to increase to 9.1 billion by 2050. To sustain this growing population, food production will need to increase substantially. Therefore, modern agriculture faces the dual challenge of meeting rising food demand while operating under the constraints of limited land, water, and nutrient resources.</p><p>In the wake of growing environmental and economic concerns, optimum nutrient management is of paramount importance. Fertilizer cost is a key consideration for farmers when gauging economic returns.</p><p>Nitrogen is essential for agriculture because it is a key component of plant growth, protein synthesis, and photosynthesis, which together boost crop yield and quality. However, reliance on large amounts of nitrogenous fertilizers is environmentally hazardous and has resulted in serious perturbation of the global nitrogen cycle. This progressively deteriorating situation has prompted the goal of developing fertilizer-efficient crop plants. It has also shifted the primary objective from simply increasing food production to achieving <em>sustainable</em> food production, placing a premium on improving Nitrogen Use Efficiency (NUE) in cropping systems.</p><p>Nitrogen use efficiency (NUE) is commonly defined as a measure of how effectively a plant uses nitrogen to produce yield, often calculated as crop yield or biomass divided by the amount of nitrogen applied. There exist several approaches for improving NUE in plants, including genetics-based strategies (developing varieties that use nitrogen more efficiently) and management-based strategies (optimizing how, when, and where nitrogen is applied).</p><p>One key management consideration is applying the right rate of fertilizer at the right place. Spatial soil variability plays a central role here. Soil is a dynamic natural resource that is highly heterogeneous in its properties. Two important classes of soil heterogeneity are lithological heterogeneity — the distribution of different lithological layers in a soil matrix — and inherent soil heterogeneity, which reflects the distribution of soil properties across the soil profile. Among landscape features, soil type and topography are two of the most important determinants of soil variability. In addition to these permanent landscape features, variable factors such as temporal variability in precipitation also interact with patterns of spatial soil variability.</p><p>Given the limited availability of readily accessible soil nitrogen (N) and the high cost of synthetic nitrogenous fertilizers, nitrogen use efficiency becomes central to the effectiveness of any management practice aimed at sustainable agriculture. In this context, NUE — often defined as the ratio of grain productivity to available soil nitrate (AN) — emerges as a key metric for evaluating the effectiveness of nutrient management in sustainable cropping systems.</p><p><strong>Problem Definition</strong></p><p>Although NUE is widely used in agronomic research and crop management, its calculation as a simple ratio of yield to nitrogen input presents important statistical limitations. Ratio-based metrics can distort relationships between variables, mask true treatment effects, and lead to misleading conclusions about nitrogen responsiveness. These issues highlight the need for more robust analytical approaches to accurately assess nitrogen use efficiency.</p><p>Statistical and practical limitations can hamper the accurate assessment of NUE. Defining NUE as a ratio of grain yield to any measure of nitrogen — here, available soil nitrate (AN) — is deceptively simple and can lead to inaccurate or misleading conclusions. This project investigates the statistical challenges inherent in treating NUE as a ratio by comparing its behavior under different analytical and regression models. By examining ratio-based analyses alongside linear, quadratic, and piecewise regression approaches, we aim to identify the most reliable method for estimating NUE. Ultimately, we ask: <em>given the limited availability of plant-accessible soil nitrogen and the high cost of synthetic fertilizers, how can NUE be measured in a way that is both statistically sound and agronomically meaningful?</em></p><h2>Our Approach</h2><p><strong>Experiment Sites</strong></p><p>This project was conducted across three commercial sites located north of Edmonton in Sturgeon County, Alberta, Canada. All sites are predominantly characterized by moderately fine-textured Black Chernozemic soil, with an average growing season precipitation of 286 mm and a mean growing season temperature of 2.67 °C. Each site is managed under conventional tillage and used for arable cropping. A rotation of wheat (<em>Triticum aestivum</em> L.), canola (<em>Brassica napus</em> L.), and field pea (<em>Pisum sativum</em> L.) is followed at the Bert site, while a wheat–canola rotation is used at the Brad and Lamoureux sites. Variable rate urea (46-0-0) was applied across sites in 2015, with different application rates by site.</p><p><strong>Grain Productivity and Soil Data</strong></p><p>Wheat grain productivity was recorded in September 2015 using a Green Star™ 3 yield monitor mounted on a combine harvester. Moisture and grain flow sensors were calibrated prior to harvest. Wet and dry grain volume (kg ha⁻¹) was recorded at geo-referenced locations across the fields.</p><p>In early June 2015, 2-ha sampling grids were established at each site, and 30 soil samples were collected per grid using a tractor-mounted Auto-Probe™ at a depth of 0–15 cm. Samples from each grid were homogenized to form a representative composite, and subsamples (~50 g) were stored at 4 °C. These samples were analyzed at Midwest Labs for available soil nitrate (AN), phosphorus (AP), and potassium (AK). AP was measured using the P1 (weak Bray) method, AK using neutral ammonium acetate extraction, and AN using flow injection analysis.</p><p><strong>Ratio and Statistical Analysis of NUE</strong></p><p>NUE was initially computed as a ratio of grain yield (y) to available soil nitrate (AN) (x), which helped highlight several statistical challenges associated with ratio-based metrics. All analyses were conducted in R (R Core Team, 2017).</p><p>The relationship between grain yield and AN was explored through multiple regression approaches. Before fitting linear models, normality was evaluated using the Shapiro–Wilks test. A linear regression (LR) model I (ordinary least squares) was fitted, with diagnostic checks for model fit assessed via the Shapiro–Wilks and Breusch–Pagan tests for residual normality and homoscedasticity respectively.</p><p>To account for sampling error in the explanatory variable, LR model II was applied, estimating slopes using major axis (MA), standard major axis (SMA), and ranged major axis (RMA) methods. The grain yield–AN relationship was further analyzed using quadratic regression (QR) and piecewise regression (PWR) models.</p><p>Statistical power considerations were also evaluated. The minimum number of sampling units required to detect a specified effect size was calculated using a standard power formula, with a Z<sub>crit</sub> of 0.05 and power of 80% (β = 0.8), estimating the number of samples required to detect a 10% difference in NUE relative to the variety AC Andrew.</p><h3>Results Overview</h3><p>Available soil nitrate (AN) and wheat grain yield showed clear site-level relationships across the Bert, Brad, and Lamoureux sites: grain yield increased by 102, 232, and 164 kg ha⁻¹ per lb ac⁻¹ of AN respectively (Line A). Slope estimates from LR model I and LR model II highlighted notable differences between methods, and regression diagnostic plots revealed patterns in residual dispersion that violate linearity assumptions — indicating that linear models do not perform well for these data, although Q-Q plots showed residuals were approximately normally distributed.</p><p>Comparing LR, QR, and PWR modeling results across all sites, quadratic regression was found to best characterize the relationship between grain yield and AN, capturing the true curvature of the yield response. The first derivative of the quadratic equation provides an agronomically relevant estimate of NUE.</p><h3>Conclusion</h3><p>This chapter highlights the statistical limitations of defining nitrogen use efficiency (NUE) as a simple ratio of grain yield to available nitrogen. Ratio-based analyses assume isometry — a condition not supported by the data — and can lead to misleading conclusions. By comparing multiple statistical approaches, the study demonstrates that regression-based methods, particularly quadratic regression (QR), provide a more reliable way to characterize yield response to soil nitrate and to estimate agronomically and economically optimal nitrogen rates.</p>`,
  },]
