import honeyJujubier from "@/assets/honey-jujubier.jpg";
import honeyMontagne from "@/assets/honey-montagne.jpg";
import honeyThym from "@/assets/honey-thym.jpg";
import honeyMultifloral from "@/assets/honey-multifloral.jpg";
import honeyEucalyptus from "@/assets/honey-eucalyptus.jpg";
import honeyHarmel from "@/assets/honey-harmel.jpg";
import honeyGeleeRoyale from "@/assets/honey-gelee-royale.jpg";
import honeyCoffret from "@/assets/honey-coffret.jpg";

export const productImages: Record<string, string> = {
  "honey-jujubier": honeyJujubier,
  "honey-montagne": honeyMontagne,
  "honey-thym": honeyThym,
  "honey-multifloral": honeyMultifloral,
  "honey-eucalyptus": honeyEucalyptus,
  "honey-harmel": honeyHarmel,
  "honey-gelee-royale": honeyGeleeRoyale,
  "honey-coffret": honeyCoffret,
};

export const getProductImage = (key: string): string => {
  return productImages[key] || honeyJujubier;
};
