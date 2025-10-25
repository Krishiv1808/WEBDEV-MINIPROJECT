document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const place = urlParams.get('place');

    // Elements to update
    const destinationInfo = document.querySelector('.destination-info');
    const planList = document.querySelector('.plans ul');

    if (place) {
        switch (place.toLowerCase()) {
            case 'paris':
                destinationInfo.innerHTML = `
                    <h1>About Paris</h1>
                    <br>
                    <p>Paris, the capital of France, is often called the "City of Light" due to its historical significance in the Age of Enlightenment and its leading role in culture, art, fashion, and philosophy. The city is renowned for its stunning architecture, rich history, and world-class landmarks.</p>
                `;
                planList.innerHTML = `
                    <li>Day 1: Visit the Eiffel Tower and Seine River Cruise</li>
                    <li>Day 2: Explore the Louvre Museum and Montmartre</li>
                    <li>Day 3: Take a day trip to Versailles</li>
                `;
                break;
            case 'dubai':
                destinationInfo.innerHTML = `
                    <h1>About Dubai</h1><br>
                    <p>Dubai, the largest city in the UAE, is known for its modern architecture, luxury shopping, and vibrant nightlife scene. It is home to the Burj Khalifa, the world's tallest building.Dubai is one of the most iconic and futuristic cities in the world. Dubai is a global hub for business, tourism, and culture. </p>
                `;
                planList.innerHTML = `
                    <li>Day 1: Visit Burj Khalifa and Dubai Mall</li>
                    <li>Day 2: Explore Palm Jumeirah and Atlantis Aquaventure</li>
                    <li>Day 3: Desert Safari and Dubai Marina</li>
                `;
                break;
            case 'bali':
                destinationInfo.innerHTML = `
                    <h1>About Bali</h1>
                    <br>
                    <p>Bali is a tropical paradise and one of the most popular destinations in Indonesia, known for its stunning beaches, vibrant culture, lush landscapes, and spiritual atmosphere. Located in the westernmost tip of the Lesser Sunda Islands, Bali offers a mix of natural beauty, rich traditions, and modern amenities.</p>
                `;
                planList.innerHTML = `
                    <li>Day 1: Visit Tanah Lot Temple and Uluwatu Temple</li>
                    <li>Day 2: Explore the rice terraces and Ubud Monkey Forest</li>
                    <li>Day 3: Take a boat trip to Nusa Penida Island</li>
                `;
                break;
            case 'jaipur':
                destinationInfo.innerHTML = `
                    <h1>About Jaipur</h1><br>
                    <p>Jaipur, known as the Pink City, is the capital of the Indian state of Rajasthan. It's one of the most popular tourist destinations in India, famous for its rich history, stunning architecture, and vibrant culture. As part of the Golden Triangle tourist circuit (along with Delhi and Agra), Jaipur offers a blend of royal heritage, colorful bazaars, and impressive forts and palaces.</p>
                `;
                planList.innerHTML = `
                    <li>Day 1: Visit Amber Fort and City Palace</li>
                    <li>Day 2: Explore Hawa Mahal and Jantar Mantar</li>
                    <li>Day 3: Take a day trip to the nearby Pushkar</li>
                `;
                break;
            case 'lasvegas':
                destinationInfo.innerHTML = `
                    <h1>About Las Vegas</h1><br>
                    <p>Las Vegas, often simply referred to as "Vegas," is a world-renowned city located in the state of Nevada, USA. It’s famous for its extravagant resorts, vibrant nightlife, 24-hour entertainment, and large-scale casinos. Known as the "Entertainment Capital of the World," Las Vegas attracts millions of visitors every year, offering a wide range of experiences, from high-stakes gambling to world-class performances and lavish accommodations.</p>
                `;
                planList.innerHTML = `
                    <li>Day 1: Explore The Strip and see the Bellagio Fountains</li>
                    <li>Day 2: Visit the High Roller Observation Wheel and enjoy a Vegas show</li>
                    <li>Day 3: Take a day trip to the Grand Canyon</li>
                `;
                break;
            case 'switzerland':
                destinationInfo.innerHTML = `
                    <h1>About Switzerland</h1><br>
                    <p>Switzerland is a beautiful, landlocked country located in Central Europe. Its geographic location places it in the heart of the continent, surrounded by several European countries, which makes it a central hub for travelers.</p>
                `;
                planList.innerHTML = `
                    <li>Day 1: Visit the Matterhorn and Zermatt</li>
                    <li>Day 2: Explore Lucerne and take a boat trip on Lake Lucerne</li>
                    <li>Day 3: Go hiking in the Swiss Alps or visit Jungfraujoch</li>
                `;
                break;
            default:
                destinationInfo.innerHTML = `<h1>Destination Not Found</h1>`;
                planList.innerHTML = `<li>No plans available for this location.</li>`;
        }
    } else {
        // Default message when no location is provided
        destinationInfo.innerHTML = `<h1>Welcome to Travel Bliss</h1><p>Select a destination to learn more.</p>`;
    }
});
