const content = `
  <style>
    :host {
      background: hsl(0, 0%, 4%);
      box-sizing: border-box;
      color: hsl(0, 0%, 98%);
      display: block;
      font-family: sans-serif;
      font-size: 16px;
      line-height: 1.5;
      padding: 32px;
      width: 100%;
    }

    .names {
      font-size: 24px;
      margin-bottom: 16px;
    }

    p {
      margin: 0;
    }

    .red {
      color: hsl(14, 100%, 53%);
    }

    a {
      color: hsl(0, 0%, 86%);
    }

    a:focus,
    a:hover {
      color: hsl(0, 0%, 98%);
      text-decoration: underline;
    }
  </style>

  <p class="names">
    <strong>I stand in solidarity</strong> with
    <a href="https://en.wikipedia.org/wiki/Killing_of_George_Floyd" target="_blank" rel="noreferrer">George Floyd</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Breonna_Taylor" target="_blank" rel="noreferrer">Breonna Taylor</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Ahmaud_Arbery" target="_blank" rel="noreferrer">Ahmaud Arbery</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Tony_McDade" target="_blank" rel="noreferrer">Tony McDade</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Anthony_Hill" target="_blank" rel="noreferrer">Anthony Hill</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Jamarion_Robinson" target="_blank" rel="noreferrer">Jamarion Robinson</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Willie_McCoy" target="_blank" rel="noreferrer">Willie McCoy</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Emantic_Fitzgerald_Bradford_Jr." target="_blank" rel="noreferrer">Emantic Fitzgerald Bradford J</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Jemel_Roberson" target="_blank" rel="noreferrer">Jemel Roberson</a>,
    <a href="https://en.wikipedia.org/wiki/Murder_of_Botham_Jean" target="_blank" rel="noreferrer">Botham Shem Jean</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Anthony_Lamar_Smith" target="_blank" rel="noreferrer">Anthony Lamar Smith</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Ramarley_Graham" target="_blank" rel="noreferrer">Ramarley Graham</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Trayvon_Martin" target="_blank" rel="noreferrer">Trayvon Martin</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Larry_Jackson_Jr." target="_blank" rel="noreferrer">Larry Jackson Jr</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Jonathan_Ferrell" target="_blank" rel="noreferrer">Jonathan Ferrell</a>,
    <a href="https://en.wikipedia.org/wiki/Death_of_Chavis_Carter" target="_blank" rel="noreferrer">Chavis Carter</a>,
    <a href="https://en.wikipedia.org/wiki/Death_of_Chavis_Carter#Similar_deaths" target="_blank" rel="noreferrer">Victor White III</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Dontre_Hamilton" target="_blank" rel="noreferrer">Dontre Hamilton</a>,
    <a href="https://en.wikipedia.org/wiki/Death_of_Eric_Garner" target="_blank" rel="noreferrer">Eric Garner</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_John_Crawford_III" target="_blank" rel="noreferrer">John Crawford III</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Michael_Brown" target="_blank" rel="noreferrer">Michael Brown</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Ezell_Ford" target="_blank" rel="noreferrer">Ezell Ford</a>,
    <a href="https://en.wikipedia.org/wiki/Ferguson_unrest#Kajieme_Powell" target="_blank" rel="noreferrer">Kajieme Powell</a>,
    <a href="https://en.wikipedia.org/wiki/Murder_of_Laquan_McDonald" target="_blank" rel="noreferrer">Laquan McDonald</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Akai_Gurley" target="_blank" rel="noreferrer">Akai Gurley</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Tamir_Rice" target="_blank" rel="noreferrer">Tamir Rice</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Jerame_Reid" target="_blank" rel="noreferrer">Jerame Reid</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Charley_Leundeu_Keunang" target="_blank" rel="noreferrer">Charly Keunang</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Tony_Robinson" target="_blank" rel="noreferrer">Tony Robinson</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Walter_Scott" target="_blank" rel="noreferrer">Walter Scott</a>,
    <a href="https://en.wikipedia.org/wiki/Death_of_Freddie_Gray" target="_blank" rel="noreferrer">Freddie Gray</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Samuel_DuBose" target="_blank" rel="noreferrer">Samuel DuBose</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Jamar_Clark" target="_blank" rel="noreferrer">Jamar Clark</a>,
    <a href="https://en.wikipedia.org/wiki/Dismissal_of_Robert_Rialmo#Quintonio_LeGrier" target="_blank" rel="noreferrer">Quintonio LeGrier</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Greg_Gunn" target="_blank" rel="noreferrer">Gregory Gunn</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Alton_Sterling" target="_blank" rel="noreferrer">Alton Sterling</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Philando_Castile" target="_blank" rel="noreferrer">Philando Castile</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Terence_Crutcher" target="_blank" rel="noreferrer">Terence Crutcher</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Keith_Lamont_Scott" target="_blank" rel="noreferrer">Keith Lamont Scott</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Alfred_Olango" target="_blank" rel="noreferrer">Alfred Olango</a>,
    <a href="https://en.wikipedia.org/wiki/Murder_of_Jordan_Edwards" target="_blank" rel="noreferrer">Jordan Edwards</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Stephon_Clark" target="_blank" rel="noreferrer">Stephon Clark</a>,
    <a href="https://en.wikipedia.org/wiki/Shooting_of_Patrick_Harmon" target="_blank" rel="noreferrer">Patrick Harmon</a>,
    and countless others who have been victims of <span class="red">racism</span> and <span class="red">police brutality</span>.
  </p>

  <p><strong><a href="https://blacklivesmatters.carrd.co/" target="_blank" rel="noreferrer">Go here to find out how <em>you</em> can help.</a></strong></p>

  <p><small><a href="https://github.com/trentmwillis/i-stand" target="_blank" rel="noreferrer">Embed this on your site.</a></small></p>
`;

class BlackLives extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = content;
  }
}

customElements.define("black-lives", BlackLives);
