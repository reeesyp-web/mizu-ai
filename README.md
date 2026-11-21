# Mizu.AI

A free, open-source, **bring-your-own-key** AI chat and roleplay app that runs entirely in your browser. No backend, no accounts required, no build step: the whole app is a single `index.html`.

**Live demo:** https://reeesyp-web.github.io/mizu-ai/

> Without an API key the app runs in **demo mode**, so you can click around before connecting anything.

## Features

**Chat**
- Streaming replies from any supported API (see [Connecting an AI](#connecting-an-ai))
- Edit, delete, reorder, regenerate and swap the role of any message, including the AI's
- Swipe between regenerated alternatives
- Attach text files, `.docx` files and images (image replies use an optional vision model)
- Optional web search and an optional separate "thinking" model
- Read replies aloud with your browser's voices (per-character voice, pitch and speed)
- Share selected messages as a link or export them as images

**Characters and roleplay**
- Create and edit characters with avatar, description, greeting, scenario and example dialogue
- Per-character **system prompt** and **post-history instructions**
- Group chats with several characters
- **Lorebook / world info** (global or per character) with keyword triggers
- **Author's Note** per chat, inserted at a configurable depth
- Automatic **long-term memory**: older messages are summarized and the summary is editable
- Import and export **Character Card V2/V3** (`.png` and `.json`), including embedded lorebooks and alternate greetings

**Model controls**
- Temperature, **Top-P, Min-P, Top-K and repetition penalty** (only the values you fill in are sent)
- Max reply length, context window size and a global system instruction
- Global final instructions (jailbreak slot) added to every chat

**Quality of life**
- Light, dark and automatic modes, color themes and custom chat backgrounds
- User profile (name and bio the AI takes into account)
- Full backup export/import (your API keys are never included)
- Optional **Sign in with Google** to sync your data to your own Google Drive
- Interface in English, Español, Português, Русский and Français

## Connecting an AI

Open **Settings / API** and choose the API format:

| Format | Works with |
| --- | --- |
| OpenAI-compatible | OpenAI, DeepSeek, OpenRouter, Groq, Ollama, LM Studio, KoboldCpp, and others |
| Anthropic | Claude |
| Google Gemini | Gemini |

Fill in the **Base URL**, **Model** and **API key**. The **Detect models** button queries the provider's model list so you can pick one instead of typing it.

### Local models (Ollama, LM Studio, KoboldCpp)

Use the quick-shortcut buttons in Settings, or enter the URL yourself:

| Program | Base URL | Notes |
| --- | --- | --- |
| Ollama | `http://localhost:11434/v1` | Start it with `OLLAMA_ORIGINS="*"` |
| LM Studio | `http://localhost:1234/v1` | Turn on **Enable CORS** in the Local Server tab |
| KoboldCpp | `http://localhost:5001/v1` | CORS is enabled by default |

Local servers don't need a real key; the app fills in `local` for you.

> **HTTPS note:** browsers may block an `https://` page (such as the GitHub Pages version) from calling an `http://localhost` server. If that happens, download `index.html` and open it directly on your computer, or put the local server behind an HTTPS tunnel.

## Privacy

- Mizu.AI has **no server of its own**. Characters, chats and settings are stored in your browser's local storage.
- Your messages go **directly from your browser to the AI provider you configure**, using your own key.
- API keys stay on your device. They are excluded from backups and are not synced to Google Drive.
- If you sign in with Google, your data is saved to the hidden app-data folder of your own Google Drive, not to a server run by this project.

See `privacidad.html` and `terminos.html` for the full privacy policy and terms of service.

## Run it yourself

No installation needed:

1. Download or clone this repository.
2. Open `index.html` in your browser.

To serve it locally instead:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

### Deploy on GitHub Pages

1. Push `index.html` (plus `privacidad.html` and `terminos.html`) to your repository.
2. In **Settings → Pages**, select the branch and the root folder.
3. Your app will be available at `https://<your-user>.github.io/<repo>/`.

If you enable Google sign-in on your own copy, you'll need your own Google OAuth client ID and must add your Pages URL as an authorized origin.

## Project structure

```
index.html       The entire app (HTML, CSS and JavaScript)
privacidad.html  Privacy policy
terminos.html    Terms of service
LICENSE          MIT license
README.md        This file
```

## Contributing

Issues and pull requests are welcome. The app is intentionally dependency-free, so please keep changes in plain HTML, CSS and JavaScript, and add any new interface text to all five languages.

## License

Released under the [MIT License](LICENSE).
