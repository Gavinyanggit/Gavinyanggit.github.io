# Retrieval-Augmented Generation (RAG) for Older Adult Mobility and Health Information

**Author:** Jia Yang  
**Supervisor:** Dr. Rong Zheng  
**Institution:** McMaster University  

---

## 1. Project Description and Approach

### 1.1 Motivation

Older adults increasingly rely on online resources for health information related to mobility, fall prevention, balance training, and rehabilitation. However:

- Search engines often return fragmented or unreliable results.
- Large Language Models (LLMs) may generate fluent but unverified responses.
- Health misinformation can negatively impact safety and decision-making.

This project develops a reliable, citation-grounded Retrieval-Augmented Generation (RAG) system designed specifically for older-adult mobility and health information.

---

### 1.2 System Overview

The system integrates:

- BM25 lexical retrieval  
- Cross-encoder semantic reranking  
- Relevance-gating mechanism (cross-encoder threshold τ = 0.6)  
- Google Search API web fallback  
- LLM-based answer generation with explicit citations  

#### Pipeline Workflow

1. User submits a natural-language query.  
2. BM25 retrieves top-k passages from a curated MongoDB corpus.  
3. A cross-encoder reranks candidate passages.  
4. A relevance gate determines:
   - High CE score → use local evidence  
   - Low CE score → trigger web fallback  
5. The LLM generates a plain-language answer with citations.

---

### 1.3 Key Design Features

- Curated corpus of trusted health documents  
- Explicit source citations in every response  
- Plain-language output tailored for older adults  
- Safety-aware prompts with medical disclaimers  
- Modular Python implementation (BM25, Sentence-Transformers, Flask, Streamlit)

---

### 1.4 Architecture Components

- Crawler Layer (PDF and web ingestion)  
- Retrieval Layer (BM25)  
- Reranking Layer (Cross-encoder)  
- Decision Layer (Relevance Gate)  
- Generation Layer (LLM synthesis)  
- User Interface Layer (CLI, Flask API, Streamlit UI)

---

## 2. Results

### 2.1 Retrieval Performance (BEIR Benchmark)

Semantic retrieval outperformed pure BM25:

| Dataset  | Method   | nDCG@10 | MAP@10 | Recall@100 |
|-----------|----------|----------|----------|-------------|
| SciFact   | BM25     | 0.5178   | 0.4760   | 0.7896      |
| SciFact   | Semantic | 0.6451   | 0.5959   | 0.9250      |
| NFCorpus  | BM25     | 0.3804   | 0.3415   | 0.6827      |
| NFCorpus  | Semantic | 0.4686   | 0.4317   | 0.8541      |

A hybrid BM25 + cross-encoder pipeline balances computational efficiency and semantic precision.

---

### 2.2 Local vs Web Retrieval

| Query Type      | Local CE | Web CE |
|----------------|----------|--------|
| In-domain      | ~0.997   | ~0.892 |
| Out-of-domain  | ~0.00002 | ~0.958 |

These results demonstrate strong domain sensitivity and reliable fallback behavior for out-of-scope queries.

---

### 2.3 Qualitative Evaluation

Evaluation using real-world older-adult mobility queries demonstrates:

- Evidence-grounded responses  
- High in-domain relevance  
- Appropriate fallback behavior  
- Clear citation display  
- Inclusion of safety disclaimers  

---

## 3. Source Code

The full implementation, retrieval pipeline, and deployment instructions are maintained in a private GitHub repository:

**Github Repository:**  
[View GitHub Repository](https://github.com/Gavinyanggit/RAG-older-adult-mobility)

---

## 4. References

- Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., Küttler, H., Lewis, M., Yih, W. T., Rocktäschel, T., Riedel, S., & Kiela, D. (2020). *Retrieval-augmented generation for knowledge-intensive NLP tasks*. Advances in Neural Information Processing Systems, 33, 9459–9474.  
  https://papers.nips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html

- Robertson, S., & Zaragoza, H. (2009). *The probabilistic relevance framework: BM25 and beyond*. Foundations and Trends® in Information Retrieval, 3(4), 333–389.  
  https://doi.org/10.1561/1500000019

- Nogueira, R., & Cho, K. (2019). *Passage re-ranking with BERT*. arXiv preprint arXiv:1901.04085.  
  https://arxiv.org/abs/1901.04085

- OpenAI. (2023). *GPT-4 technical report*. arXiv preprint arXiv:2303.08774.  
  https://arxiv.org/abs/2303.08774

- Izacard, G., & Grave, E. (2021). *Leveraging passage retrieval with generative models for open-domain question answering*. Proceedings of EACL 2021.  
  https://arxiv.org/abs/2007.01282

- Thakur, N., Reimers, N., Rücklé, A., Srivastava, A., & Gurevych, I. (2021). *BEIR: A heterogeneous benchmark for zero-shot evaluation of information retrieval models*. Advances in Neural Information Processing Systems (NeurIPS 2021).  
  https://arxiv.org/abs/2104.08663

- National Institute on Aging. (2023). *Falls and falls prevention*. National Institutes of Health.  
  https://www.nia.nih.gov/health/falls-and-falls-prevention

- World Health Organization. (2022). *Healthy ageing*.  
  https://www.who.int/health-topics/ageing