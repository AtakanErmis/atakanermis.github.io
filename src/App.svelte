<script>
  import Blog from "./Blog.svelte";
  export let socialLinks;
</script>

<style type="text/scss">
  @import url("https://fonts.googleapis.com/css?family=Exo+2&display=swap");
  main {
    background: black;
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .content {
    padding: 30px;
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

  .blog-indicator {
    position: absolute;
    bottom: 1rem;
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation-name: fade;
    animation-delay: 100ms;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    svg {
      margin-top: 1rem;
      transform: scale(0.75);
    }
    p {
      font-size: 0.8rem;
    }
  }

  @for $i from 1 through 8 {
    ul li:nth-child(#{$i}) {
      animation-delay: $i * 75ms;
    }
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
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
  <div class="content">
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
  </div>
  <div class="blog-indicator">
    <svg
      width="130"
      height="30"
      viewBox="0 0 130 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M1 2L65 27.6L129 2" stroke="white" stroke-width="4" />
    </svg>
  </div>
</main>

<Blog />
