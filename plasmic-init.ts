import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const projectId = "gnSD9EMjsdfCMyg5ggjLSr";
export const projectApiToken = "TIU94bDYbUGXuxXBOVPiM8rTSEEF7rXE2j1PKYoE6LEgIGk75MPh5Tgi2meHyJMvrg5D4bsxp8uSHHMM8cg";
export const host = "https://builder.yurekai.com";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: projectId,
      token: projectApiToken,
    },
  ],
  host,
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
