# About Section Image - Generation Prompts

Use one of the prompts below to generate an image of DJ.L working on a laptop. Choose based on which AI image generator you're using.

---

## Midjourney / Leonardo.ai / Ideogram

### Prompt 1: Professional Tech Workspace
```
Professional Indian male entrepreneur working late night on laptop, modern minimalist home office setup, large monitor displaying n8n workflow automation screens with nodes and connections, code editor visible in background, warm ambient lighting with monitor glow, coffee cup beside laptop, standing desk, clean organized workspace, shallow depth of field, cinematic lighting, photorealistic, 8k quality, neutral dark background with subtle bokeh
```

### Prompt 2: Focused Developer Shot
```
Indian man working on MacBook Pro in creative workspace, side profile view, glowing screen illuminating face with n8n workflow visualization, dark moody atmosphere, dramatic lighting from monitor, modern interior design, plants in background, professional photography style, ultra realistic, detailed, shot on Sony A7IV, 85mm lens
```

### Prompt 3: Warm Professional
```
Upper body shot of Indian male developer, sitting at desk working on laptop, n8n automation workflow visible on screen, warm golden hour lighting from window, cozy home office with books and tech gadgets, professional headshot style with work context, clean aesthetic, shot on Canon 5D Mark IV, natural light photography
```

---

## DALL-E 3 / GPT Image

### Prompt 1
```
A professional photo of an Indian man working on a laptop at a modern desk setup. The screen shows n8n workflow automation nodes and connections. Warm ambient lighting, clean minimalist workspace, coffee cup visible, photorealistic style, high quality, neutral dark background
```

### Prompt 2
```
Photorealistic portrait of an Indian entrepreneur working on a laptop in a modern home office. Screen displays AI automation workflows with connected nodes. Mood: focused and productive. Cinematic lighting from the monitor. Clean dark aesthetic. Professional photography style.
```

---

## Stable Diffusion (with negative prompt)

### Positive Prompt
```
professional Indian male, entrepreneur, working on laptop, n8n automation workflow on screen, modern home office, minimalist desk setup, warm lighting, monitor glow, coffee, photorealistic, 8k, sharp focus, cinematic composition
```

### Negative Prompt
```
cartoon, anime, illustration, painting, drawing, blurry, low quality, deformed, ugly, bad anatomy, extra fingers, mutated hands, watermark, text, logo, signature
```

### Recommended Settings for SD
- **Model:** Realistic Vision v5.1 or Juggernaut XL
- **Steps:** 30-40
- **CFG Scale:** 7-8
- **Sampler:** DPM++ 2M Karras

---

## Image Requirements

| Spec | Value |
|------|-------|
| **Aspect Ratio** | 4:5 or 1:1 (square) for About section |
| **Minimum Resolution** | 800x1000px or 800x800px |
| **Format** | JPG or PNG |
| **File Name** | `about-me.jpg` or `about-me.png` |
| **Location** | `assets/about-me.jpg` |

---

## After Generation

1. Download the generated image
2. Crop/resize if needed to fit the circular frame
3. Save to `assets/about-me.jpg`
4. Update `index.html` line 383 to reference your image:

```html
<!-- Change from: -->
<div class="abstract-visual"></div>

<!-- To: -->
<img src="assets/about-me.jpg" alt="DJ.L working on laptop" class="about-photo">
```

---

## Alternative: Silhouette Style

If you want a more artistic/sleek look:

```
Minimalist silhouette of Indian man working on laptop, profile view, glowing screen creating dramatic backlight, modern tech workspace, dark moody atmosphere, clean vector art style, single color accent (#ff6a00), suitable for portfolio
```

This works great for abstract representations while keeping the focus on your work.
