import React from 'react'

const Carousel = () => {
    return (
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" >
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src='./boat.jpg' height="600" alt="..." />
                    <div class="carousel-caption bounce">
                        <h3>Book Now</h3>
                        <p>Exciting offers available!</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src='./p2.jpg' class="d-block w-100" height="600" alt="..." />
                    <div class="carousel-caption bounce">
                        <h3>Book Now</h3>
                        <p>Exciting offers available!</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src='https://c.myholidays.com/blog/blog/content/images/2020/11/Places-To-Visit-In-India.webp' class="d-block w-100" height="600" alt="..." />
                    <div class="carousel-caption bounce">
                        <h3>Book Now</h3>
                        <p>Exciting offers available!</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel
