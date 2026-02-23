

<div class='page_head'>
 <h1 class='page_title'> mmWave-based Indoor and Vehicular Sensing </h1>


<h3>Table of Contents </h3>
  <ol class='page_guide'>
    <li><a href="#Objectives">Objectives</a></li>
    <li><a href="#Participant">Participants</a></li>
    <li><a href="#Research">Research Thrusts</a>
     <ol class='page_guide'>
      <li><a href="#Pi-ViMo">Pi-ViMo</a></li>
      <li><a href="#SUPER">SUPER</a></li>
      <li><a href="#Assessment">Quantitative Assessment</a></li>
     </ol>
      </li>
    <li><a href="#Downloads">Downloads</a></li>
    <li><a href="#Acknowledgment">Acknowledgment</a></li>
    <li><a href="#Publication">Publication</a></li>
    
  </ol>
</div>

<h1 id="Objectives"> Objectives </h1>
Non-contact sensing for vital signs and human activities utilizing wireless signals has attracted a lot of attention in the last few years. Extensive research has been done using cameras and wireless technologies such as WiFi, acoustic waves, Ultra-wide band (UWB) and mmWave radars. The performance of vision-based solutions tends to degrade under poor light conditions and in presence of obstacles in environments. Privacy threat is another concern in deploying vision-based solutions in home or in personal vehicles. In contrast, RF sensing is advantageous in its ability to penetrate garments or walls, operate under different lighting and weather conditions, and better preserve people’s privacy. Despite successful research demonstrations, there remain significant gaps in practical adoption and deployment. Many challenges need to be addressed to handle the presence of multiple subjects, subject diversity and environmental interferences. The objective of this project is to develop robust non-contact sensing solutions to detecting vital signs and extracting high-level analytics of human activities in indoor and in-vehicle environments.
<h1 id="Participant"> Participants </h1>
  <ol class='name_list'>
    <li><a>Mihail Georgiev</a></li>
    <li><a>Bodee Quansah</a></li>
    <li><a>Zimeng Zhou</a></li>
    <li><a>Boyu Jiang</a></li>
  </ol>
<h1 id="Research"> Research Thrusts </h1>

<h2 id="Pi-ViMo"> Pi-ViMo: Physiology-inspired Robust Vital Sign Monitoring using mmWave Radars </h2>
<div class='content_block'>
  <p>
 Continuous monitoring of human vital signs using non-contact mmWave radars is attractive due to their ability to penetrate garments and operate under different lighting conditions. Unfortunately, most prior research requires subjects to stay at a fixed distance from radar sensors and to remain still during monitoring. These restrictions limit the applications of radar vital sign monitoring in real life scenarios. In this work, we address these limitations and present Pi-ViMo, a non-contact Physiology-inspired Robust Vital Sign Monitoring system, using mmWave radars. We first derive a multi-scattering point model for the human body, and introduce a coherent combining of multiple scatterings to enhance the quality of estimated chest-wall movements. It enables vital sign estimations of subjects at any location in a radar's field of view (FoV). We then propose a template matching method to extract human vital signs by adopting physical models of respiration and cardiac activities. The proposed method is capable to separate respiration and heartbeat in the presence of micro-level random body movements (RBM) when a subject is at any location within the field of view of a radar
  </p>
 <div class='content_img'>
  <img src="/assets/mmwave_pic/systemoverview.jpg" />
 </div>
</div>

<h2 id ='SUPER'>SUPER: Seated Upper Body Pose Estimation using mmWave Radars</h2>
<div class='content_block'>
 <p>
 In industrial countries, adults spend a considerable amount of time sedentary each day at work, driving and during activities of daily living. Characterizing the seated upper body human poses using mmWave radars is an important, yet under-studied topic with many applications in human-machine interaction, transportation and road safety. In this work, we devise SUPER, a framework for seated upper body human pose estimation that utilizes dual-mmWave radars in close proximity. A novel masking algorithm is proposed to coherently fuse data from the radars to generate intensity and Doppler point clouds with complementary information for high-motion but small radar cross section areas (e.g., upper extremities) and low-motion but large RCS areas (e.g. torso). A lightweight neural network extracts both global and local features of upper body and output pose parameters for the Skinned Multi-Person Linear (SMPL) model.
 </p>

  <div class='content_img'>
  <img src="/assets/mmwave_pic/SUPER_img.png" />
 </div>
</div>

<h2 id = 'Assessment'>Quantitative Assessment of mmWave Point Cloud for Target Detection</h2>
<div class='content_img'>
 <p>
  This study focuses on developing quantifiable metrics to evaluate point cloud quality for human targets. The metrics are composed of two parts, coverage and consistency. Coverage tests employ Euclidean distance to quantify errors between the ground truth human mesh and the point cloud. Additionally, the coverage test evaluates the percentage of points reflected from each body segment. The second focus is on consistency. Point clouds consistency across consecutive frames are assessed by analyzing the standard deviation of mean and maximum intensity values and calculating Hausdorff distances to evaluate the stability of the point cloud distribution.
 </p>
</div>
<h1 id="Downloads"> Downloads </h1>
<h1 id="Acknowledgment"> Acknowledgment </h1>
<h1 id="Publication"> Publication </h1>

<p>Zhang Bo, Jiang Boyu, Zheng Rong, Zhang Xiaoping, Li Jun and Xu Qian. <a href="https://dl.acm.org/doi/10.1145/3589347">Pi-ViMo: Physiology-inspired Robust Vital Sign Monitoring using mmWave Radars</a>, ACM Transactions on Internet of Things, Volume 4, Issue 2, 2023</p>

<p>Zhang Bo, Zhou Zimeng, Jiang Boyu and Zheng Rong. <a href="https://ieeexplore.ieee.org/document/10562158">SUPER: Seated Upper Body Pose Estimation using mmWave Radars</a>, IEEE/ACM Ninth International Conference on Internet-of-Things Design and Implementation (IoTDI), 2024</p>

<p>Jiang Boyu, Zheng Rong. <a href="https://dl.acm.org/doi/abs/10.1145/3722570.3726896">Quantitative Assessment of mmWave Point Cloud for Target Detection</a>, HumanSys: Proceedings of the 3rd International Workshop on Human-Centered Sensing, Modeling, and Intelligent Systems, 2025</p>


