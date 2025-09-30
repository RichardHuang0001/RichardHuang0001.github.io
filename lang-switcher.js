// ==================== 语言切换核心逻辑 ====================
// 说明：此文件实现网页的中英文切换功能
// 依赖：translations.js（翻译数据文件）
// 
// 架构说明：
//   - translations.js: 存储所有翻译数据
//   - lang-switcher.js: 处理语言切换逻辑
//   - index.html: 在 HTML 元素上添加 data-i18n 属性标记

// ==================== 全局变量 ====================
let currentLang = 'en'; // 当前语言（默认英文）

// ==================== 初始化 ====================
/**
 * 页面加载完成后初始化语言设置
 * 1. 从 localStorage 读取用户上次选择的语言
 * 2. 如果没有保存的语言偏好，使用默认语言（英文）
 * 3. 应用语言设置并更新按钮状态
 */
document.addEventListener('DOMContentLoaded', function() {
  // 从 localStorage 读取用户上次选择的语言
  const savedLang = localStorage.getItem('preferredLanguage');
  
  if (savedLang && (savedLang === 'en' || savedLang === 'zh')) {
    currentLang = savedLang;
  }
  
  // 应用语言设置
  switchLanguage(currentLang);
  
  // 更新按钮状态
  updateButtonState();
  
  console.log('i18n initialized. Current language:', currentLang);
});

// ==================== 核心功能函数 ====================

/**
 * 切换语言
 * @param {string} lang - 语言代码 ('en' 或 'zh')
 */
function switchLanguage(lang) {
  // 验证语言代码
  if (lang !== 'en' && lang !== 'zh') {
    console.error('Unsupported language:', lang);
    return;
  }
  
  // 检查翻译数据是否已加载
  if (typeof translations === 'undefined') {
    console.error('Translation data not loaded. Please ensure translations.js is included before lang-switcher.js');
    return;
  }
  
  currentLang = lang;
  const t = translations[lang];
  
  // 保存用户选择到 localStorage
  localStorage.setItem('preferredLanguage', lang);
  
  // 更新所有带 data-i18n 属性的元素
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    
    if (t[key]) {
      element.innerHTML = t[key];
    } else {
      // 如果翻译键不存在，在开发环境下输出警告
      console.warn(`Translation key "${key}" not found for language "${lang}"`);
    }
  });
  
  // 更新按钮状态
  updateButtonState();
  
  console.log('Language switched to:', lang);
}

/**
 * 更新语言切换按钮的激活状态
 * 为当前选中的语言按钮添加 'active' class
 */
function updateButtonState() {
  const enBtn = document.getElementById('lang-en');
  const zhBtn = document.getElementById('lang-zh');
  
  if (enBtn && zhBtn) {
    if (currentLang === 'en') {
      enBtn.classList.add('active');
      zhBtn.classList.remove('active');
    } else {
      zhBtn.classList.add('active');
      enBtn.classList.remove('active');
    }
  }
}

// ==================== 公开接口函数 ====================

/**
 * 切换到英文
 * 供 HTML onclick 调用
 */
function switchToEnglish() {
  switchLanguage('en');
}

/**
 * 切换到中文
 * 供 HTML onclick 调用
 */
function switchToChinese() {
  switchLanguage('zh');
}

/**
 * 获取当前语言
 * @returns {string} 当前语言代码
 */
function getCurrentLanguage() {
  return currentLang;
}

// ==================== 扩展功能（可选）====================

/**
 * 添加新的可翻译元素
 * @param {HTMLElement} element - 要添加翻译的 DOM 元素
 * @param {string} key - 翻译键
 */
function addTranslatableElement(element, key) {
  element.setAttribute('data-i18n', key);
  
  // 立即应用当前语言的翻译
  const t = translations[currentLang];
  if (t[key]) {
    element.innerHTML = t[key];
  }
}

// ==================== 使用说明 ====================
/**
 * 如何使用此 i18n 系统：
 * 
 * 1. 在 HTML 中添加 data-i18n 属性：
 *    <h1 data-i18n="heading_about">About</h1>
 * 
 * 2. 在 translations.js 中添加对应的翻译：
 *    en: { heading_about: "About" }
 *    zh: { heading_about: "关于我" }
 * 
 * 3. 在 HTML 中添加语言切换按钮：
 *    <button onclick="switchToEnglish()">EN</button>
 *    <button onclick="switchToChinese()">中文</button>
 * 
 * 4. 确保文件加载顺序：
 *    <script src="translations.js"></script>  <!-- 先加载翻译数据 -->
 *    <script src="lang-switcher.js"></script>  <!-- 再加载逻辑 -->
 */