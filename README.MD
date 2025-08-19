
# YOLO based object detection
This repository contains a unified and modular implementation of YOLOv5-based object detection models tailored for critical safety and surveillance applications. The merged codebase integrates multiple detection capabilities into a single, streamlined framework:

🔥 Fire Detection

💨 Smoke Detection

🔫 Weapon Detection

🧍‍♂️ Human Fall Detection

🤼 Physical Encounter Detection

The system is designed for real-time performance and can be easily deployed on edge devices. Each detection module has been trained and optimized to ensure high accuracy in dynamic environments such as industrial sites, public areas, and smart buildings.

## Deployment

🚀 Fire it up on your machine and let AI keep an eye on safety.

```bash
  git clone https://muneeb_saif@bitbucket.org/reedling/yolov5_deployments.git
```
Use your bitbucket security keys to continue.
```bash
cd yolov5_deployments/
pip install -r requirements.txt
```
### Name of Models
fall | smoke | car| gun | fire 
 
##### 🧩 Model Link & Weights Utility
Those Python scripts to save model download links and fetch model weights using a model name.
## 📌 Files
1. SaveModelLink.py
2. DownloadModelWeights.py
# 🚀 How to Use
```bash   
   python SaveModelLink.py --model <model_name> --url <model_download_url>
   python DownloadModelWeights.py --model <model_name> "optional" --name <Model_Weights_name>
```
### ▶️ Running the Model   
Run YOLO detection by giving the video and image source, alert type, and display options.
```bash
python inference.py --source 'rtsp://dl-team:dl@Onstak123@10.39.110.246:554/ch5/main/av_stream.h264' --alert Fire --conf-thres 0.3 --imgsz 640
```
