const publicationsData = [
    {
        "id": "semanticfoam",
        "title": "Semantic Foam: Unifying Spatial and Semantic Scene Decomposition",
        "authors": [
            "Amr Sharafeldin",
            "Aryan Mikaeili",
            "Thomas Walker",
            "Shrisudhan Govindarajan",
            "Daniel Rebain",
            "Kwang Moo Yi",
            "Andrea Tagliasacchi"
        ],
        "venue": "CVPR",
        "year": "2026",
        "location": "",
        "abstract": "Abstracts the scene into hierarchical components that unify spatial geometry with semantic decomposition.",
        "highlightOnIndex": false,
        "selected": false
    },
    {
        "id": "radfoam",
        "title": "Radiant Foam: Real-Time Differentiable Ray Tracing",
        "authors": [
            "Shrisudhan Govindarajan*",
            "Daniel Rebain*",
            "Nicola Conci",
            "Kwang Moo Yi",
            "Andrea Tagliasacchi"
        ],
        "authorsHTML": [
            "<a class=\"author me\" href=\"https://shrisudhan.github.io\" target=\"_blank\">Shrisudhan Govindarajan*</a>",
            "<a class=\"author\" href=\"http://drebain.com/\" target=\"_blank\">Daniel Rebain*</a>",
            "<a class=\"author\" href=\"https://www.cs.ubc.ca/~kmyi/\" target=\"_blank\">Kwang Moo Yi</a>",
            "<a class=\"author\" href=\"https://theialab.ca/\" target=\"_blank\">Andrea Tagliasacchi</a>"
        ],
        "venue": "ICCV",
        "year": "2025",
        "location": "Hawaii",
        "badges": [
            {
                "text": "Highlight (Top 5%)",
                "icon": "fa-solid fa-star"
            }
        ],
        "media": {
            "type": "video",
            "src": "pub_thumbnails/radfoam.mp4"
        },
        "links": [
            { "label": "Project page", "url": "https://radfoam.github.io/" },
            { "label": "Arxiv", "url": "https://arxiv.org/abs/2502.01157" },
            { "label": "Code", "url": "https://github.com/theialab/radfoam" }
        ],
        "abstract": "Real-time differentiable ray tracing without special hardware using volumetric meshes.",
        "abstractFull": "Research on differentiable scene representations is consistently moving towards more efficient, real-time models. Recently, this has led to the popularization of splatting methods, which eschew the traditional ray-based rendering of radiance fields in favor of rasterization. This has yielded a significant improvement in rendering speeds due to the efficiency of rasterization algorithms and hardware, but has come at a cost... We propose a novel scene representation which avoids these approximations, but keeps the efficiency and reconstruction quality of splatting by leveraging a decades-old efficient volumetric mesh ray tracing algorithm which has been largely overlooked in recent computer vision research. The resulting model, which we name Radiant Foam, achieves rendering speed and quality comparable to Gaussian Splatting, without the constraints of rasterization.",
        "bibtex": "@article{govindarajan2025radfoam,\nauthor = {Govindarajan, Shrisudhan and Rebain, Daniel and Yi, Kwang Moo and Tagliasacchi, Andrea},\ntitle = {Radiant Foam: Real-Time Differentiable Ray Tracing},\nbooktitle = {International Conference on Computer Vision (ICCV)},\nyear = {2025},\n}",
        "highlightOnIndex": true,
        "selected": true
    },
    {
        "id": "noksr",
        "title": "NoKSR: Kernel-Free Neural Surface Reconstruction via Point Cloud Serialization",
        "authors": [
            "Colin Li*",
            "Weiwei Sun*",
            "Shrisudhan Govindarajan",
            "Shaobo Xia",
            "Daniel Rebain",
            "Kwang Moo Yi",
            "Andrea Tagliasacchi"
        ],
        "venue": "3DV",
        "year": "2025",
        "location": "Singapore",
        "media": {
            "type": "video",
            "src": "pub_thumbnails/noksr.mp4"
        },
        "links": [
            { "label": "Project page", "url": "https://theialab.github.io/noksr" },
            { "label": "Arxiv", "url": "https://arxiv.org/abs/2502.12534" },
            { "label": "Code", "url": "https://github.com/theialab/noksr" }
        ],
        "abstract": "Multi-scale, point-based surface reconstruction method that leverages point cloud serialization for inference efficiency.",
        "bibtex": "@article{li2025noksr,\nauthor = {Zhen Li and Weiwei Sun and Shrisudhan Govindarajan and Shaobo Xia and Daniel Rebain and Kwang Moo Yi and Andrea Tagliasacchi},\ntitle = {NoKSR: Kernel-Free Neural Surface Reconstruction via Point Cloud Serialization},\nbooktitle = {International Conference on 3D Vision (3DV)},\nyear = {2025},\n}",
        "highlightOnIndex": false,
        "selected": false
    },
    {
        "id": "laghashes",
        "title": "Lagrangian Hashing for Compressed Neural Field Representations",
        "authors": [
            "Shrisudhan Govindarajan*",
            "Zeno Sambugaro*",
            "Ahan Shabhanov",
            "Towaki Takikawa",
            "Weiwei Sun",
            "Daniel Rebain",
            "Nicola Conci",
            "Kwang Moo Yi",
            "Andrea Tagliasacchi"
        ],
        "venue": "ECCV",
        "year": "2024",
        "location": "Milan",
        "media": {
            "type": "video",
            "src": "pub_thumbnails/laghash.mp4"
        },
        "links": [
            { "label": "Project page", "url": "https://theialab.github.io/laghashes/" },
            { "label": "Arxiv", "url": "https://arxiv.org/abs/2409.05334" },
            { "label": "Code", "url": "https://github.com/theialab/lagrangian_hashes" }
        ],
        "abstract": "Memory-efficient hybrid representation that is simultaneously Eulerian (grids) and Lagrangian (points).",
        "bibtex": "@article{govindarajan2024laghashes,\nauthor = {Govindarajan, Shrisudhan and Sambugaro, Zeno and Shabhanov, Ahan and Takikawa, Towaki and Sun, Weiweiand Rebain, Daniel and Conci, Nicola and  Yi, Kwang Moo and Tagliasacchi, Andrea},\ntitle = {Lagrangian Hashing for Compressed Neural Field Representations},\nbooktitle = {European Conference on Computer Vision (ECCV) },\nyear = {2024},\n}",
        "highlightOnIndex": false,
        "selected": false
    },
    {
        "id": "banf",
        "title": "BANF: Band-limited Neural Fields for Levels of Detail Reconstruction",
        "authors": [
            "Ahan Shabhanov",
            "Shrisudhan Govindarajan",
            "Cody Reading",
            "Lily Goli",
            "Daniel Rebain",
            "Kwang Moo Yi",
            "Andrea Tagliasacchi"
        ],
        "venue": "CVPR",
        "year": "2024",
        "location": "Seattle",
        "media": {
            "type": "video",
            "src": "pub_thumbnails/banf.mov"
        },
        "links": [
            { "label": "Project page", "url": "https://theialab.github.io/banf/" },
            { "label": "Arxiv", "url": "https://arxiv.org/abs/2404.13024" },
            { "label": "Code", "url": "https://github.com/theialab/banf" }
        ],
        "abstract": "Controls the frequency of learned signals in neural fields for levels of detail reconstruction.",
        "bibtex": "@article{ahan2024banf,\nauthor = {Shabanov, Ahan and Govindarajan, Shrisudhan and Reading, Cody and Goli, Lily and Rebain, Daniel and Moo Yi, Kwang and Tagliasacchi, Andrea},\ntitle = {BANF: Band-limited Neural Fields for Levels of Detail Reconstruction},\nbooktitle = {Conference on Computer Vision and Pattern Recognition (CVPR)},\nyear = {2024},\n}",
        "highlightOnIndex": false,
        "selected": false
    },
    {
        "id": "dpmv",
        "title": "Stereo-Knowledge Distillation from dpMV to Dual Pixels for Light Field Video Reconstruction",
        "authors": [
            "Aryan Garg",
            "Raghav Mallampalli",
            "Akshat Joshi",
            "Shrisudhan Govindarajan",
            "Kaushik Mitra"
        ],
        "venue": "ICCP",
        "year": "2024",
        "location": "Lausanne",
        "media": {
            "type": "image",
            "src": "pub_thumbnails/dpmv.png"
        },
        "links": [
            { "label": "Project page", "url": "#" },
            { "label": "Arxiv", "url": "https://arxiv.org/abs/2405.11823" },
            { "label": "Code", "url": "https://github.com/Aryan-Garg/dp-LFVR" }
        ],
        "abstract": "Reconstructs light field video from dual pixels video stream using stereo-knowledge distillation.",
        "bibtex": "@article{garg2024dpmv,\nauthor = {Aryan Garg and Raghav Mallampali and Akshat Joshi and Shrisudhan Govindarajan and Kaushik Mitra},\ntitle = {Stereo-Knowledge Distillation from dpMV to Dual Pixels for Light Field Video Reconstruction},\nbooktitle = {International Conference on Computational Photography (ICCP)},\nyear = {2024},\n}",
        "highlightOnIndex": false,
        "selected": false
    },
    {
        "id": "monolf",
        "title": "Synthesizing Light Field Video from Monocular Video",
        "authors": [
            "Shrisudhan Govindarajan",
            "Prasan Shedligeri",
            "Sarah",
            "Kaushik Mitra"
        ],
        "venue": "ECCV",
        "year": "2022",
        "location": "Tel Aviv",
        "badges": [
            {
                "text": "Oral (Top 2%)",
                "icon": "fa-solid fa-star"
            }
        ],
        "media": {
            "type": "image",
            "src": "pub_thumbnails/monolf.png"
        },
        "links": [
            { "label": "Project page", "url": "https://shrisudhang.github.io/pages/monolf-ECCV22/" },
            { "label": "Arxiv", "url": "https://arxiv.org/abs/2207.10357.pdf" },
            { "label": "Code", "url": "https://github.com/ShrisudhanG/Synthesizing-Light-Field-Video-from-Monocular-Video" }
        ],
        "abstract": "Reconstructs high-fidelity light field video from a single monocular video stream using self-supervision.",
        "bibtex": "@article{govindarajan2022monolf,\nauthor = {Govindarajan, Shrisudhan and Shedligeri, Prasan and Sarah and Mitra, Kaushik},\ntitle = {Synthesizing Light Field Video from Monocular Video},\nbooktitle = {European Conference on Computer Vision (ECCV) },\nyear = {2022},\n}",
        "highlightOnIndex": false,
        "selected": false
    }
];
