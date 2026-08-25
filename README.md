# polyflix-web

影藏 & 影现播放器（PolyFlix 系列）的静态展示官网。

## 产品（两类）

- **影藏 PolyFlix** — 把文件藏进能正常播放的 MP4（多态文件）。[GitHub](https://github.com/hcllmsx/PolyFlix)
- **影现播放器** — “会识别自己人”的万能视频播放器，自动识别双视频。包含两个版本：
  - **Windows 版**：基于 libmpv 的桌面播放器。[GitHub](https://github.com/hcllmsx/PolyFlixPlayer)
  - **Android 版**：基于 Flutter + media_kit 的移动播放器。[GitHub](https://github.com/hcllmsx/PolyFlixPlayer-Mobile)

## 目录结构

```
polyflix-web/
├── index.html              # 官网首页（含完整 SEO 信息）
├── robots.txt              # 搜索引擎抓取规则
├── sitemap.xml             # 站点地图
└── assets/
    ├── css/style.css       # 样式
    ├── js/main.js          # 交互（滚动阴影 + 进场动画）
    └── img/                # 从各项目复制的 logo / 图标
        ├── yincang-logo.png
        ├── player-logo-512px.png   # 影现播放器标志（总览/PC端/下载区）
        ├── player-logo-192px.png   # 影现播放器图标（安卓端/apple-touch-icon）
        └── og-cover.png     # 社交分享封面（1200×630）
```

## SEO 已包含

- `<title>` / `description` / `keywords` / `author` / `canonical`
- Open Graph（og:title / og:description / og:image / og:url 等）
- Twitter Card
- 3 段 JSON-LD 结构化数据（SoftwareApplication）
- `robots.txt` + `sitemap.xml`

> 站点域名：`https://polyflix.sxrec.com/`（已填写于 `index.html` 的 canonical / og:url / og:image / twitter:image，以及 `sitemap.xml` 与 `robots.txt`）。

## 本地预览

直接用浏览器打开 `index.html` 即可；若需本地服务器：

```powershell
# 方式一：Python（无需 Node）
# 在项目根目录执行
python -m http.server 8080
# 浏览器访问 http://127.0.0.1:8080

# 方式二：npx serve（需 Node.js，会自动选端口）
# 在项目根目录执行
npx serve
# 终端会输出本地地址（默认 http://localhost:3000），浏览器打开即可
```

## 下载

> 温馨提示：下载网盘文件时，建议先转存到自己的网盘再下载，谢谢支持。

### 影藏

- 夸克网盘：<https://pan.quark.cn/s/b6ad184e5647>
- 百度网盘：<https://pan.baidu.com/s/5vOx8T2vgyeGVewN8Fk_UaA>

### 影现播放器 · Windows

- 夸克网盘：<https://pan.quark.cn/s/7afb019a677e>
- 百度网盘：<https://pan.baidu.com/s/5KVa4tfspcyYNTBfkP2MhiQ>

### 影现播放器 · 安卓

- 夸克网盘：<https://pan.quark.cn/s/9b2272e3f1f6>
- 百度网盘：<https://pan.baidu.com/s/5EuqZZphFAXz5yZOSi8rfXg>

