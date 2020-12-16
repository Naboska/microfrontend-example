<script lang="ts">

</script>

<style>
  .title-container {
      position: relative;
      display: flex;
      align-content: center;
      justify-content: center;
      padding: 100px 0 400px;
  }

  .title-container::after {
      content: '';
      position: absolute;
      background-clip: border-box;
      width: 100%;
      height: 100%;
      top: 0;
      background: url('https://kibersport.net/wp-content/uploads/2020/08/e898cbfa782239a43bd96e7f6453.jpg');
      background-size: cover;
      box-shadow: inset 0 0 40px 50px var(--colors-gray_900);
      opacity: 0.05;
  }

  .title-container_text {
      z-index: 1;
      color: var(--colors-white);
      font-size: 120px;
      font-weight: 900;
      animation: anim_text 1s ease-in-out;
  }

  @keyframes anim_text {
      from {
          transform: translateY(20px);
          opacity: 0;
      }
      to {
          transform: translateY(0);
          opacity: 1;
      }
  }
</style>

<div class="title-container">
  <span class='title-container_text'>Поиграем?</span>
</div>