<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php include './includes/header.php'; ?>

  <main class="container">
      <div class="boxes">
        <div class="box">
          <div class="box_number">1</div>
          <div>
            <ul class="box_text">
              <li>- Text 1</li>
            </ul>
          </div>
          <button class="box_button">Button 1</button>
        </div>
        <div class="box">
          <div class="box_number">2</div>
          <div>
            <ul class="box_text">
              <li>- Text 1</li>
              <li>- Text 2</li>
              <li>- Text 3</li>
            </ul>
          </div>
          <button class="box_button">Button 2</button>
        </div>
        <div class="box">
          <div class="box_number">3</div>
          <div>
            <ul class="box_text">
              <li>- Text 1</li>
              <li>- Text 2</li>
              <li>- Text 3</li>
              <li>- Text 4</li>
            </ul>
          </div>
          <button class="box_button">Button 3</button>
        </div>
      </div>
      <!-- Slider main container -->
      <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide"><img src="./images/image-1.jpeg" alt="img1"></div>
          <div class="swiper-slide"><img src="./images/image-2.jpeg" alt="img2"></div>
          <div class="swiper-slide"><img src="./images/image-3.jpeg" alt="img3"></div>
          ...
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
      </div>
      <p class="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
        quasi quam recusandae beatae quod nostrum earum assumenda, corporis
        fugit facilis quaerat itaque voluptas repellat veritatis. Deserunt
        animi, alias deleniti beatae ex adipisci laboriosam labore tempora ullam
        odio ea autem. Alias provident maxime saepe iusto. Tenetur, totam?
        Nulla, rem. Saepe, vero.x
      </p>
      <div class="my_contacts">
        <a class="my_conctacts-inner" href="https://t.me/sadbatya">
          <img src="./icons/telegram.png" alt="" width="30px">
          Связаться со мной sadbatya
        </a>
        <a class="my_conctacts-inner" href="tel:+7866069314">
          <img src="./icons/telephone-call.png" alt="" width="30px">
          Позвонить мне +1-786-606-93-14
        </a>
      </div>
    </main>

    <?php include './includes/footer.php'; ?>
</body>
</html>