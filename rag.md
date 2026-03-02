---
layout: default
title: RAG for Older Adult Mobility and Health Information
---

<style>
/* Page-scoped fixes (NO SCSS changes needed) */
.rag-page{
  font-size:16px;
  line-height:1.7;
  color:#1f2937;
}
.rag-page p,.rag-page li{font-size:16px;line-height:1.75;}
.rag-page h1{font-size:32px;margin:0 0 8px;}
.rag-page h2{font-size:22px;margin:26px 0 10px;}
.rag-page h3{font-size:18px;margin:18px 0 8px;}
.rag-meta{margin:8px 0 14px;font-size:14px;color:#374151;}
.rag-meta strong{color:#111827;}
.rag-hr{border:0;border-top:1px solid #e5e7eb;margin:18px 0;}

.rag-page a{text-decoration:underline;text-underline-offset:2px;}
.rag-page a:hover{opacity:.85;}

/* Tables (still Markdown tables) */
.rag-table-wrap{
  overflow-x:auto;
  margin:12px 0 18px;
  border:1px solid #e5e7eb;
  border-radius:10px;
}
.rag-table-wrap table{width:100%;border-collapse:collapse;font-size:14px;}
.rag-table-wrap th,.rag-table-wrap td{
  padding:10px 12px;
  border-bottom:1px solid #e5e7eb;
  text-align:left;
  vertical-align:top;
}
.rag-table-wrap th{background:#f9fafb;font-weight:700;}
.rag-table-wrap tr:last-child td{border-bottom:0;}
</style>

<div class="rag-page" markdown="1">

# Retrieval-Augmented Generation (RAG) for Older Adult Mobility and Health Information {#top}

<div class="rag-meta">
  <div><strong>Author:</strong> Jia Yang</div>
  <div><strong>Supervisor:</strong> Dr. Rong Zheng</div>
  <div><strong>Institution:</strong> McMaster University</div>
</div>

<hr class="rag-hr" />

## Table of Contents {#table-of-contents}

* TOC
{:toc}

<hr class="rag-hr" />

## 1. Project Description and Approach {#1-project-description-and-approach}

### Motivation {#motivation}

Older adults increasingly rely on online resources for health information related to mobility, fall prevention, balance training, and rehabilitation. However:

- Search engines often return fragmented or unreliable results.
- Large Language Models (LLMs) may generate fluent but unverified responses.
- Health misinformation can negatively impact safety and decision-making.

This project develops a reliable, citation-grounded Retrieval-Augmented Generation (RAG) system designed specifically for older-adult mobility and health information.

<hr class="rag-hr" />

### System Overview {#system-overview}

The system integrates:

- **BM25** lexical retrieval  
- **Cross-encoder** semantic reranking  
- **Relevance-gating mechanism** (CE threshold τ = 0.6)  
- **Google Search API** web fallback  
- **LLM-based** answer generation with explicit citations  

#### Pipeline Summary {#pipeline-summary}

1. User submits a natural-language query.  
2. BM25 retrieves top-k passages from a curated MongoDB corpus.  
3. A cross-encoder reranks candidates.  
4. A relevance gate determines:  
   - **High CE score** → use local database evidence  
   - **Low CE score** → trigger web fallback  
5. The LLM generates a plain-language answer with citations.

<hr class="rag-hr" />

### Key Design Features {#key-design-features}

- Curated corpus of trusted health documents and passages  
- Explicit source citations in every answer  
- Plain-language output tailored for older adults  
- Safety-aware prompts with medical disclaimers  
- Modular Python implementation (BM25, Sentence-Transformers, Flask, Streamlit)

<hr class="rag-hr" />

### Architecture Components {#architecture-components}

- **Crawler Layer** (PDF + Web)  
- **Retrieval Layer** (BM25)  
- **Reranking Layer** (Cross-encoder)  
- **Decision Layer** (Relevance Gate)  
- **Generation Layer** (LLM synthesis)  
- **User Interface Layer** (CLI, Flask API, Streamlit UI)

<hr class="rag-hr" />

## 2. Results {#2-results}

### Retrieval Performance (BEIR Benchmark) {#retrieval-performance-beir-benchmark}

Semantic retrieval outperformed BM25:

<div class="rag-table-wrap" markdown="1">

| Dataset   | Method   | nDCG@10 | MAP@10 | Recall@100 |
|----------|----------|--------:|-------:|-----------:|
| SciFact  | BM25     | 0.5178  | 0.4760 | 0.7896     |
| SciFact  | Semantic | 0.6451  | 0.5959 | 0.9250     |
| NFCorpus | BM25     | 0.3804  | 0.3415 | 0.6827     |
| NFCorpus | Semantic | 0.4686  | 0.4317 | 0.8541     |

</div>

A hybrid BM25 + cross-encoder balances computational efficiency and semantic precision.

<hr class="rag-hr" />

### Local vs Web Retrieval {#local-vs-web-retrieval}

<div class="rag-table-wrap" markdown="1">

| Query Type     | Local CE     | Web CE   |
|---------------|-------------:|---------:|
| In-domain      | ≈ 0.997      | ≈ 0.892  |
| Out-of-domain  | ≈ 0.000018   | ≈ 0.958  |

</div>

These results demonstrate strong domain sensitivity and reliable fallback behavior for out-of-scope queries.

<hr class="rag-hr" />

### Qualitative Evaluation {#qualitative-evaluation}

Evaluation using real-world older-adult mobility queries demonstrates:

- Evidence-grounded responses  
- High in-domain relevance  
- Appropriate fallback behavior  
- Clear citation display  
- Inclusion of safety disclaimers  

<hr class="rag-hr" />

## 3. Source Code {#3-source-code}

The full implementation, retrieval pipeline, and deployment instructions are maintained in a private GitHub repository:

- **GitHub Repository:** [View GitHub Repository](https://github.com/Gavinyanggit/RAG-older-adult-mobility)

<hr class="rag-hr" />

## 4. References {#4-references}

- Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., Küttler, H., Lewis, M., Yih, W. T., Rocktäschel, T., Riedel, S., & Kiela, D. (2020). *Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.* NeurIPS 2020, 33, 9459–9474.  
  [Paper link](https://papers.nips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html)

- Izacard, G., & Grave, E. (2021). *Leveraging Passage Retrieval with Generative Models for Open-Domain Question Answering.* EACL 2021.  
  [Paper link](https://arxiv.org/abs/2007.01282)

- Nogueira, R., & Cho, K. (2019). *Passage Re-ranking with BERT.* arXiv:1901.04085.  
  [Paper link](https://arxiv.org/abs/1901.04085)

- Thakur, N., Reimers, N., Rücklé, A., Srivastava, A., & Gurevych, I. (2021). *BEIR: A Heterogeneous Benchmark for Zero-shot Evaluation of Information Retrieval Models.* NeurIPS 2021.  
  [Paper link](https://arxiv.org/abs/2104.08663)

- World Health Organization. (2022). *Healthy Ageing.*  
  [WHO page](https://www.who.int/health-topics/ageing)

[Back to top ↑](#top)

</div>
