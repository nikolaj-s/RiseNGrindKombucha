import React from 'react'

import "./Focus.css"

export const Focus = () => {
    return (
        <div className="focus-container">
            <div className="focus-info-container buch-info-container">
                <h2>Our Focus</h2>
                <p>
                    The focus at Rise N’ Grind, is to provide organic and
                    unique kombucha flavors, with a strict control on fresh
                    ingredients.
                    <br />
                    <br />
                    We also try our best to brew and ship our buch in
                    recycled mason jars, to minimize our carbon foot print
                    on the planet.
                    <br />
                    <br />
                    Plus to create a healthy drink to power you through your
                    daily rise and grind!
                </p>
            </div>
            <div className="focus-images-container">
                <div className="focus-image-container-1">
                    <img src="https://res.cloudinary.com/drlkgoter/image/upload/v1616088018/Nor.%20X%20west/data_image_jpeg_base64__9j_4AAQSkZJRgABAQAAAQABAAD_2wCEAAoHCBYWFRgWFRUYGRgaGhgaGhoaGhoaGBgaGBoaGhgYGhocIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQsJCsxNDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ_euzpmp.jpg" alt="jarred-buch" />
                </div>
                <div className="focus-image-container-2">
                    <img src="https://res.cloudinary.com/drlkgoter/image/upload/v1616084558/Nor.%20X%20west/images_1_evisiy.jpg" alt="bottled-buch" />
                </div>
            </div>
        </div>
    )
}
