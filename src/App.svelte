<script>
  export let socialLinks;
  let name = "atakan";
</script>

<style type="text/scss">
  @import url("https://fonts.googleapis.com/css?family=Exo+2&display=swap&text=ATKNERMİŞ");
  main {
    background: black;
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: "Exo 2", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  h1 {
    text-align: center;
    font-size: 48px;
    letter-spacing: 3px;
    animation: startup 1s forwards;
  }
  h2 {
    opacity: 0;
    text-align: center;
    animation: startup 1s 250ms forwards;
    font-weight: 400;
  }
  ul {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    margin-top: 50px;
    li {
      margin: 15px;
      transform: translateY(-25px);
      opacity: 0;
      animation: links 450ms cubic-bezier(0.17, 0.89, 0.01, 1.27) forwards;
      a {
        color: white;
        display: block;
        text-align: center;
        line-height: 64px;
        width: 64px;
        height: 64px;
        border: 2px solid white;
        border-radius: 50%;
        font-size: 24px;
        transition: color, background 250ms;
        &:hover {
          background: white;
          color: black;
        }
      }
    }
  }

  @for $i from 1 through 8 {
    ul li:nth-child(#{$i}) {
      animation-delay: $i * 75ms;
    }
  }

  @keyframes links {
    0% {
      transform: translateY(-25px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes startup {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

<main>
  <h1>ATAKAN ERMİŞ</h1>
  <h2>Software Developer</h2>
  <ul>
    {#each socialLinks as { name, link, icon }}
      <li>
        <a
          href={link}
          aria-label={name}
          rel="noopener noreferrer"
          target="_blank">
          <i class={icon} />
        </a>
      </li>
    {/each}
  </ul>
</main>
