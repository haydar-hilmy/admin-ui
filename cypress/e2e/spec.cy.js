describe("Token Testing", () => {
  it("User masuk ke link URL http://localhost:5173/", () => {
    cy.visit("http://localhost:5173/");
    cy.window().then((win) => {
      const refreshToken = win.localStorage.getItem("refreshToken");
      if (!refreshToken) {
        cy.url().should("include", "/login");
      } else {
        cy.url().should("eq", "http://localhost:5173/");
      }
    });
  });

  it("User masuk ke halaman Login http://localhost:5173/login jika refreshToken tidak valid", () => {
    cy.visit("http://localhost:5173/login");
    cy.get("button").contains("Login").should("be.visible");
  });
});







describe("User Login Testing", () => {
  it("Memasukkan email dan password dengan format tidak valid", () => {
    cy.visit("http://localhost:5173/login");

    cy.get('input[type="email"][name="email"]').type("zuckerberg@meta");

    cy.get('input[type="password"][name="password"]').clear();

    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("Memasukkan email dan password format valid tetapi tidak sesuai database", () => {
    cy.visit("http://localhost:5173/login");

    cy.get('input[type="email"][name="email"]').type("zuckerberg@meta.com");
    cy.get('input[type="password"][name="password"]').type("654321");

    cy.get('button[type="submit"]').should("not.be.disabled");

    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/login");
  });

  it("Memasukkan email dan password valid sesuai database", () => {
    cy.visit("http://localhost:5173/login");

    cy.get('input[type="email"][name="email"]').type("111202214577@mhs.dinus.ac.id");
    cy.get('input[type="password"][name="password"]').type("123456");

    cy.get('button[type="submit"]').click();

    cy.url().should("eq", "http://localhost:5173/");
  });

  it("User menekan tombol untuk menuju halaman dashboard", () => {
    cy.visit("http://localhost:5173/login");

    cy.get('input[type="email"][name="email"]').type("111202214577@mhs.dinus.ac.id");
    cy.get('input[type="password"][name="password"]').type("123456");

    cy.get('button[type="submit"]').click();

    cy.get('a[href="/"]').click();

    cy.url().should("eq", "http://localhost:5173/");
  });

  it("Memastikan halaman dashboard berdasarkan URL", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("eq", "http://localhost:5173/");
  });

  it("Melakukan reload dan mengecek nama user pada navbar tidak hilang", () => {
    cy.visit("http://localhost:5173/login");

    cy.get('input[type="email"][name="email"]').type("111202214577@mhs.dinus.ac.id");
    cy.get('input[type="password"][name="password"]').type("123456");

    cy.get('button[type="submit"]').click();

    cy.reload();

    cy.get('span#myName').should("not.be.empty");
  });
});
