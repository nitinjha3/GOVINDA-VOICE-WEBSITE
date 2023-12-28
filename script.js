// const imageNames = [
//     'Ayush.jpg',
//     'Prji.jpg',
//     'yatra.jpg',
//     'Ashutosh Pr.jpg',
//   ];

//   const galleryContainer = document.getElementById('imageGallery');
//   // const prevButton = document.querySelector('.controls button:first-child');
//   // const nextButton = document.querySelector('.controls button:last-child');
//   // const prevButton=document.getElementById('prev')
//   // const nextButton=document.getElementById('next')

//   let currentIndex = 0;

//   function showImage(index) {
//     // Hide all images
//     const images = document.querySelectorAll('.gallery img');
//     images.forEach((img) => img.classList.remove('active'));

//     // Display the image at the specified index
//     const currentImage = images[index];
//     if (currentImage) {
//       currentImage.classList.add('active');
//     }

//     // Update currentIndex
//     currentIndex = index;

//     // Update button state
//     // updateButtonState();
//   }

//   // function updateButtonState() {
//   //   prevButton.disabled = currentIndex === 0;
//   //   nextButton.disabled = currentIndex === imageNames.length - 1;
//   // }

//   function prevImage() {
//     if (currentIndex > 0) {
//       showImage(currentIndex - 1);
//     }
//   }

//   function nextImage() {
//     if (currentIndex < imageNames.length - 1) {
//       showImage(currentIndex + 1);
//     }
//   }

  
//   imageNames.forEach((imageName) => {
//     const imgElement = document.createElement('img');
//     imgElement.src = `images/${imageName}`;
//     galleryContainer.appendChild(imgElement);
//   });

 
//   showImage(0);