// ==================== 翻译数据配置文件 ====================
// 说明：此文件包含网站的所有中英文翻译内容
// 维护提示：
//   - 添加新的可翻译内容时，在两个语言对象中同时添加对应的 key
//   - key 命名规范：section_element，如 nav_about, heading_projects
//   - 中文字符串中的引号请使用单引号包裹，如: '校级"优秀团员"'

const translations = {
  // ==================== 英文翻译 ====================
  en: {
    // 导航栏
    nav_about: "About",
    nav_experiences: "Experience",
    nav_projects: "Research",
    nav_awards: "Honors & Awards",
    
    // 个人信息区
    name: "Wei Huang (黄维)",
    institution: "The Chinese University of Hong Kong",
    
    // About 部分
    heading_about: "About",
    bio_intro: "I am a CS student focusing on AI. I received my B.Eng in Computer Science from <a href='https://www.hitsz.edu.cn/index.html' target='_blank'>HITSZ</a> and I am currently pursuing an Master degree in Computer Science at <a href='https://www.cuhk.edu.hk/' target='_blank'>CUHK</a>.",
    bio_current: "I previously worked as an intern in the AI Agents R&D team at <a href='https://www.tencent.com/' target='_blank'>Tencent Technology</a>.",
    // bio_interests: "My research interests include multimodal action recognition, multimodal learning, AI for Chemistry, and AI Agents application development.",
    cv_link: "<a href='hw_cv.pdf' target='_blank'>Click to view my CV</a>",
    
    heading_research_interests: "Research Interests",
    interest_1: " Multimodal Learning",
    interest_2: "Video Understanding & Action Recognition",
    interest_3: "Multi-Agent Systems & RAG",
    interest_4: "AI for Chemistry",
    // interest_5: "",
    // interest_6: "Natural Language Processing",
    
    heading_education: "Education",
    edu_school: "Harbin Institute of Technology, Shenzhen",
    edu_degree: "B.Eng. in Computer Science and Technology",
    edu_period: "Sept. 2021 - July 2025",
    edu_gpa: "GPA: 87/100",
    edu_school_cuhk: "The Chinese University of Hong Kong",
    edu_degree_cuhk: "M.Sc. in Computer Science",
    edu_period_cuhk: "Aug. 2025 - Jul. 2026 (Expected)",
    
    heading_languages: "Languages",
    lang_chinese: "Chinese (Native)",
    lang_english: "English (IELTS: 7.5)",
    
    // Experiences 部分
    heading_experiences: "Experiences",
    exp1_title: "AI Agents R&D Intern",
    exp1_company: "Tencent, CSIG",
    exp1_period: "Apr. 2025 - Sept. 2025",
    exp1_desc1: "Deeply involved in large-scale Multi-Agent system development, integrating LLM + RAG + MCP",
    exp1_bullet1: "Backend: Go + ByteDance's open-source Eino; integrated Langfuse distributed tracing; worked with Kafka, Redis, databases, and RPC",
    exp1_bullet2: "LLM: Owned deployment and tuning of open-source LLMs and rerankers (via SGLang), built an LLM evaluation framework, and optimized RAG document chunking",
    exp1_bullet3: "Assistants: Drove an intelligent operations assistant from design to implementation",
    exp1_bullet4: "Product: Co-designed the Agent system with Tencent Cloud PMs; completed internal training on AI for enterprise platform design",
    exp1_location: "Location: Shenzhen, China",
    
    
    
    // Projects 部分
    heading_projects: "Research & Projects",
    proj1_title: "Multi-modal Open-Vocabulary Video Action Recognition",
    proj1_type: "Research Project,Supervised by Prof. Bin Chen,HITSZ",
    proj1_status: "MLLM Research",
    proj1_desc: "• Adapted pre-trained CLIP model for video action recognition<br>• Enhanced fine-grained perception and temporal dynamics optimization<br>• Reproduced SOTA papers: FROSTER, OpenVCLIP, AWT<br>• Technologies: PyTorch, SlowFast, MMAction2, ViT architectures",
    
    proj2_title: "Interactive GUI Element Prediction and Cybersickness Detection in VR",
    proj2_type: "Research Project,Supervised by Prof. Cuiyun Gao,HITSZ",
    proj2_status: "VR/AR Research",
    proj2_desc: "• Developed Python scripts for VR user data acquisition and analysis<br>• Implemented baseline models for GUI element prediction<br>• Domain adaptation of SOTA models (OmniParser, CogAgent) for VR tasks<br>• Organized offline user studies for cybersickness detection",
    
    proj3_title: "RISC-V Single-Core Pipelined CPU and SoC Design",
    proj3_type: "Hardware Design Project",
    proj3_status: "Featured in Outstanding Design Showcase • Perfect Score",
    proj3_desc: "• Designed single-cycle and pipelined CPUs based on RISC-V ISA<br>• Implemented using Verilog and Vivado<br>• Achieved full functionality on FPGA board<br>• Project featured in college's outstanding design showcase",
    
    proj4_title: "Local Search Engine Development with Python",
    proj4_type: "Software Engineering Project",
    proj4_status: "Information Retrieval & NLP",
    proj4_desc: "• Built search engine from scratch with complete IR pipeline<br>• Implemented corpus preprocessing, index construction, search logic<br>• Developed simple UI for user interaction<br>• Authored technical paper on related IR and NLP topics",
    
    // Awards 部分
    heading_awards: "Honors & Awards",
    heading_academic_awards: "Academic Awards",
    award1: "Second Prize (Top 10%), Huawei Cloud & HIT APP Design Contest",
    award2: "University-level \"Excellent League Cadre\"",
    award3: "University-level \"Excellent League Member\"",
    
    heading_leadership: "Leadership",
    leader1_title: "President, University-Level Student Club",
    leader1_bullet1: "Managed and coordinated affairs for a club of approximately 300 members",
    leader1_bullet2: "Led collaborations with university departments and managed publicity efforts",
    leader1_bullet3: "Organized numerous highly-praised events",
    leader1_bullet4: "Led club to win multiple university-level honors, including \"Outstanding Student Club\"",
    
    // Skills 部分
    heading_skills: "Technical Skills",
    heading_programming: "Programming Languages",
    heading_tools: "Developer Tools",
    heading_frameworks: "Frameworks & Libraries",
    heading_fields: "Technical Fields",
    
    skill_field1: "Deep Learning",
    skill_field2: "Computer Vision",
    skill_field3: "Natural Language Processing",
    skill_field4: "Multi-modal Models",
    skill_field5: "Video Understanding",
    skill_field6: "RAG & Multi-Agent Systems",
    
    // 页脚
    footer: "© 2025 Wei Huang. Last updated: September 2025."
  },
  
  // ==================== 中文翻译 ====================
  zh: {
    // 导航栏
    nav_about: "关于",
    nav_experiences: "实习经历",
    nav_projects: "研究项目",
    nav_awards: "荣誉奖项",
    
    // 个人信息区
    name: "黄维",
    institution: "香港中文大学",
    
    // About 部分
    heading_about: "关于我",
    bio_intro: "我是一名深耕计算机与人工智能领域的学生，本科毕业于<a href='https://www.hitsz.edu.cn/index.html' target='_blank'>哈尔滨工业大学（深圳）</a>计算机科学与技术专业，目前在<a href='https://www.cuhk.edu.hk/' target='_blank'>香港中文大学</a>计算机科学专业攻读硕士。",
    bio_current: "曾在<a href='https://www.tencent.com/' target='_blank'>腾讯</a>的AI Agents研发组实习工作。",
    // bio_interests: "研究兴趣包括多模态动作识别、多模态学习、AI for Chem及AI Agents应用开发。",
    cv_link: "<a href='hw_cv_Zh.pdf' target='_blank'>点击查看我的简历</a>",
    
    heading_research_interests: "研究兴趣",
    interest_1: "多模态学习",
    interest_2: "视频理解与动作识别",
    interest_3: "多智能体系统与RAG",
    interest_4: "AI应用于化学",
    // interest_5: "多智能体系统与RAG",
    // interest_6: "自然语言处理",
    
    heading_education: "教育背景",
    edu_school: "哈尔滨工业大学（深圳）",
    edu_degree: "计算机科学与技术 工学学士",
    edu_period: "2021年9月 - 2025年7月",
    edu_gpa: "GPA: 87/100",
    edu_school_cuhk: "香港中文大学",
    edu_degree_cuhk: "计算机科学 硕士（MSc）",
    edu_period_cuhk: "2025年8月 - 2026年7月（预期）",
    
    heading_languages: "语言能力",
    lang_chinese: "中文（母语）",
    lang_english: "英语（雅思：7.5）",
    
    // Experiences 部分
    heading_experiences: "实习经历",
    exp1_title: "AI Agents研发实习生",
    exp1_company: "腾讯 云与智慧产业事业群",
    exp1_period: "2025年4月 - 2025年9月",
    exp1_desc1: "深度参与大型 Multi-Agent 系统研发，整合 LLM + RAG + MCP 能力",
    exp1_bullet1: "后端技术：Go + 字节跳动开源 Eino，接入 Langfuse 分布式追踪，覆盖 Kafka、Redis、数据库、RPC 等",
    exp1_bullet2: "大模型：负责开源大模型与重排序器部署与调优（基于 SGLang 优化），构建 LLM Eval 评测体系，优化 RAG 文档向量块",
    exp1_bullet3: "智能助手：主导智能运营助手方案设计与落地",
    exp1_bullet4: "产品：与腾讯云产品团队协作完成 Agent 系统产品设计，并参加企业中台 AI 化产品培训",
    exp1_location: "地点：中国深圳",
    
    
    
    // Projects 部分
    heading_projects: "研究与项目",
    proj1_title: "多模态开放词汇视频动作识别",
    proj1_type: "研究项目",
    proj1_status: "多模态研究",
    proj1_desc: "• 改进预训练CLIP模型用于视频动作识别<br>• 增强细粒度感知和时序动态优化<br>• 复现SOTA论文：FROSTER、OpenVCLIP、AWT<br>• 技术栈：PyTorch、SlowFast、MMAction2、ViT架构",
    
    proj2_title: "VR交互式GUI元素预测与晕动症检测",
    proj2_type: "研究项目",
    proj2_status: "VR/AR研究",
    proj2_desc: "• 开发Python脚本进行VR用户数据采集和分析<br>• 实现GUI元素预测的基线模型<br>• 对SOTA模型（OmniParser、CogAgent）进行VR场景领域适应<br>• 组织线下用户研究收集晕动症数据",
    
    proj3_title: "RISC-V单核流水线CPU与SoC设计",
    proj3_type: "硬件设计项目",
    proj3_status: "优秀设计展示 • 满分",
    proj3_desc: "• 基于RISC-V指令集设计单周期和流水线CPU<br>• 使用Verilog和Vivado实现<br>• 在FPGA板上实现完整功能<br>• 入选学院优秀设计展示",
    
    proj4_title: "Python本地搜索引擎开发",
    proj4_type: "软件工程项目",
    proj4_status: "信息检索与自然语言处理",
    proj4_desc: "• 从零搭建完整IR流程的搜索引擎<br>• 实现语料预处理、索引构建、搜索逻辑<br>• 开发简洁的用户交互界面<br>• 撰写相关IR和NLP技术论文",
    
    // Awards 部分
    heading_awards: "荣誉与奖项",
    heading_academic_awards: "学术奖项",
    award1: "二等奖（前10%），华为云 & 哈工大APP设计大赛",
    award2: '校级"优秀团干部"',
    award3: '校级"优秀团员"',
    
    heading_leadership: "领导力",
    leader1_title: "校级学生社团主席",
    leader1_bullet1: "管理协调约300名成员的社团事务",
    leader1_bullet2: "主导与校方部门合作及宣传工作",
    leader1_bullet3: "组织多次广受好评的活动",
    leader1_bullet4: '带领社团获得多项校级荣誉，包括"优秀学生社团"',
    
    // Skills 部分
    heading_skills: "技术技能",
    heading_programming: "编程语言",
    heading_tools: "开发工具",
    heading_frameworks: "框架与库",
    heading_fields: "技术领域",
    
    skill_field1: "深度学习",
    skill_field2: "计算机视觉",
    skill_field3: "自然语言处理",
    skill_field4: "多模态模型",
    skill_field5: "视频理解",
    skill_field6: "RAG与多智能体系统",
    
    // 页脚
    footer: "© 2025 黄维. 最后更新：2025年9月"
  }
};

// 导出翻译数据供其他文件使用
// 注意：如果未来需要添加新语言（如日语、韩语），在此对象中添加新的语言代码即可
