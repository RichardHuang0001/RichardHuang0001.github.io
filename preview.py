#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
个人主页快速预览脚本
使用方法：python preview.py [端口号]
默认端口：8000
"""

import http.server
import socketserver
import sys
import os
import webbrowser
import threading
import time

def get_port():
    """获取端口号，默认为8000"""
    if len(sys.argv) > 1:
        try:
            return int(sys.argv[1])
        except ValueError:
            print(f"⚠️  无效的端口号 '{sys.argv[1]}'，使用默认端口 8000")
            return 8000
    return 8000

def open_browser(url, delay=1.5):
    """延迟打开浏览器"""
    time.sleep(delay)
    print(f"🌐 正在打开浏览器...")
    webbrowser.open(url)

def main():
    PORT = get_port()
    
    # 切换到脚本所在目录
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    # 创建HTTP服务器
    Handler = http.server.SimpleHTTPRequestHandler
    
    # 添加MIME类型支持
    Handler.extensions_map.update({
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.html': 'text/html',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.pdf': 'application/pdf',
        '.woff': 'font/woff',
        '.woff2': 'font/woff2',
        '.ttf': 'font/ttf',
    })
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            url = f"http://localhost:{PORT}"
            print("\n" + "="*60)
            print(f"🚀 个人主页预览服务器已启动！")
            print("="*60)
            print(f"📍 本地地址: {url}")
            print(f"📂 根目录: {script_dir}")
            print(f"📄 主页面: index.html")
            print("-"*60)
            print("💡 提示:")
            print("   - 主页面: index.html (当前使用的版本)")
            print("   - 备用版本1: index_0.html (简洁版)")
            print("   - 备用版本2: index_2.html (Bulma框架版)")
            print("-"*60)
            print("⌨️  按 Ctrl+C 停止服务器")
            print("="*60 + "\n")
            
            # 在新线程中打开浏览器
            browser_thread = threading.Thread(target=open_browser, args=(url,))
            browser_thread.daemon = True
            browser_thread.start()
            
            # 启动服务器
            httpd.serve_forever()
            
    except OSError as e:
        if e.errno == 48 or e.errno == 98:  # Address already in use
            print(f"\n❌ 错误: 端口 {PORT} 已被占用")
            print(f"💡 请尝试使用其他端口: python preview.py 8001")
        else:
            print(f"\n❌ 错误: {e}")
        sys.exit(1)
    except KeyboardInterrupt:
        print("\n\n👋 服务器已停止")
        sys.exit(0)

if __name__ == "__main__":
    main()
