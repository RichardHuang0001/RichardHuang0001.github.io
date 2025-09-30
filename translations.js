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
    nav_experiences: "Experiences",
    nav_projects: "Projects",
    nav_awards: "Honors & Awards",
    
    // 个人信息区
    name: "Wei Huang (黄维)",
    institution: "The Chinese University of Hong Kong",
    
    // About 部分
    heading_about: "About",
    bio_intro: "I am a final-year undergraduate student at <a href='https://www.hitsz.edu.cn/index.html' target='_blank'>Harbin Institute of Technology, Shenzhen</a>, majoring in Computer Science and Technology.",
    bio_current: "I am currently working as an AI Agents R&D Intern at <a href='https://www.tencent.com/' target='_blank'>Tencent CSIG</a>, where I focus on Multi-Agent systems, RAG optimization, and LLM-based applications.",
    bio_interests: "My research interests include <b>Deep Learning</b>, <b>Computer Vision</b>, <b>Multi-modal Models</b>, and <b>Video Understanding</b>. I am particularly interested in open-vocabulary video action recognition and VR/AR applications.",
    
    heading_research_interests: "Research Interests",
    interest_1: "Deep Learning & Computer Vision",
    interest_2: "Multi-modal Models (Vision-Language)",
    interest_3: "Video Understanding & Action Recognition",
    interest_4: "VR/AR & Human-Computer Interaction",
    interest_5: "Multi-Agent Systems & RAG",
    interest_6: "Natural Language Processing",
    
    heading_education: "Education",
    edu_school: "Harbin Institute of Technology, Shenzhen",
    edu_degree: "B.Eng. in Computer Science and Technology",
    edu_period: "Sept. 2021 - July 2025 (Expected)",
    edu_gpa: "GPA: 87/100",
    
    heading_languages: "Languages",
    lang_chinese: "Chinese (Native)",
    lang_english: "English (IELTS: 7.5)",
    
    // Experiences 部分
    heading_experiences: "Experiences",
    exp1_title: "AI Agents R&D Intern",
    exp1_company: "Tencent, Cloud & Smart Industries Group (CSIG)",
    exp1_period: "Apr. 2025 - Present",
    exp1_desc1: "Engaged in end-to-end development of large-scale internal Multi-Agent systems",
    exp1_bullet1: "Engineered Agent services using ByteDance's Eino framework (Go) with LLM + MCP + RAG architecture",
    exp1_bullet2: "Developed comprehensive evaluation framework with LLM-as-a-judge methodologies",
    exp1_bullet3: "Contributed to open-source model deployment, performance evaluation, and RAG optimization",
    exp1_location: "Location: Shenzhen, China",
    
    exp2_title: "IT Department Intern",
    exp2_company: "China Construction Bank, Qingyuan Branch",
    exp2_period: "Jan. 2024 - Mar. 2024",
    exp2_bullet1: "Participated in daily IT operations and maintenance tasks",
    exp2_bullet2: "Gained practical insights into technical infrastructure of major financial institutions",
    exp2_location: "Location: Qingyuan, China",
    
    // Projects 部分
    heading_projects: "Research & Projects",
    proj1_title: "Multi-modal Open-Vocabulary Video Action Recognition",
    proj1_type: "Research Project",
    proj1_status: "Ongoing Research",
    proj1_desc: "• Adapted pre-trained CLIP model for video action recognition<br>• Enhanced fine-grained perception and temporal dynamics optimization<br>• Reproduced SOTA papers: FROSTER, OpenVCLIP, AWT<br>• Technologies: PyTorch, SlowFast, MMAction2, ViT architectures",
    
    proj2_title: "Interactive GUI Element Prediction and Cybersickness Detection in VR",
    proj2_type: "Research Project",
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
    footer: "© 2025 Wei Huang. Last updated: January 2025."
  },
  
  // ==================== 中文翻译 ====================
  zh: {
    // 导航栏
    nav_about: "关于",
    nav_experiences: "经历",
    nav_projects: "项目",
    nav_awards: "荣誉奖项",
    
    // 个人信息区
    name: "黄维",
    institution: "香港中文大学",
    
    // About 部分
    heading_about: "关于我",
    bio_intro: "我是<a href='https://www.hitsz.edu.cn/index.html' target='_blank'>哈尔滨工业大学（深圳）</a>计算机科学与技术专业大四本科生。",
    bio_current: "目前在<a href='https://www.tencent.com/' target='_blank'>腾讯CSIG</a>担任AI Agents研发实习生，专注于多智能体系统、RAG优化和大语言模型应用。",
    bio_interests: "我的研究兴趣包括<b>深度学习</b>、<b>计算机视觉</b>、<b>多模态模型</b>和<b>视频理解</b>。我对开放词汇视频动作识别和VR/AR应用特别感兴趣。",
    
    heading_research_interests: "研究兴趣",
    interest_1: "深度学习与计算机视觉",
    interest_2: "多模态模型（视觉-语言）",
    interest_3: "视频理解与动作识别",
    interest_4: "VR/AR与人机交互",
    interest_5: "多智能体系统与RAG",
    interest_6: "自然语言处理",
    
    heading_education: "教育背景",
    edu_school: "哈尔滨工业大学（深圳）",
    edu_degree: "计算机科学与技术 工学学士",
    edu_period: "2021年9月 - 2025年7月（预期）",
    edu_gpa: "GPA: 87/100",
    
    heading_languages: "语言能力",
    lang_chinese: "中文（母语）",
    lang_english: "英语（雅思：7.5）",
    
    // Experiences 部分
    heading_experiences: "实习经历",
    exp1_title: "AI Agents研发实习生",
    exp1_company: "腾讯 云与智慧产业事业群（CSIG）",
    exp1_period: "2025年4月 - 至今",
    exp1_desc1: "参与大规模内部多智能体系统的端到端开发",
    exp1_bullet1: "使用字节跳动Eino框架（Go）构建Agent服务，基于LLM + MCP + RAG架构",
    exp1_bullet2: "开发结合客观指标和LLM评判的综合评估框架",
    exp1_bullet3: "负责开源模型部署、性能评估和RAG优化",
    exp1_location: "地点：中国深圳",
    
    exp2_title: "信息技术部实习生",
    exp2_company: "中国建设银行清远分行",
    exp2_period: "2024年1月 - 2024年3月",
    exp2_bullet1: "参与日常IT运维工作",
    exp2_bullet2: "深入了解大型金融机构的技术基础设施",
    exp2_location: "地点：中国清远",
    
    // Projects 部分
    heading_projects: "研究与项目",
    proj1_title: "多模态开放词汇视频动作识别",
    proj1_type: "研究项目",
    proj1_status: "进行中",
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
    footer: "© 2025 黄维. 最后更新：2025年1月"
  }
};

// 导出翻译数据供其他文件使用
// 注意：如果未来需要添加新语言（如日语、韩语），在此对象中添加新的语言代码即可
