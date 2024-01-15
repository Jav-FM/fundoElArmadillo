const downloadBrochure = () => {
  fetch("Brochure_Fundo_Armadillo.pdf")
    .then((rest) => rest.blob())
    .then((res) => {
      const aElement = document.createElement("a");
      aElement.setAttribute("download", "Brochure_Fundo_Armadillo.pdf");
      const href = URL.createObjectURL(res);
      aElement.href = href;
      aElement.setAttribute("target", "_blank");
      aElement.click();
      URL.revokeObjectURL(href);
    });
};

export { downloadBrochure };
