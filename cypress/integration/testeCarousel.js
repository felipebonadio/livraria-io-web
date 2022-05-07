describe("Confere a existência do carousel", () => {

  describe("Procura o carousel na tela", () => {
    it("Entra na página inicial e procura o carousel", () => {
      cy.visit("http://localhost:4200");
      cy.get("#Carousel").should("be.visible");
    });
    it("Encontra um livro no carousel", () => {
      cy.get(".active > #LivroCarousel > img").should("be.visible");
    });
    it("Clica no livro do carousel", () => {
      cy.get(".active > #LivroCarousel > img").click();
    });
  });
});
