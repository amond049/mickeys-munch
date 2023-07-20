import React from 'react';
import Footer from '../Components/Footer';
import FacetedSearch from '../Components/FacetedSearch';
import NavBar from '../Components/NavBar';

function TakeOut(){
    const meals = [
        {image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/02/25/0/FNK_Aloo-Roti_H1_s4x3.jpg.rend.hgtvcom.966.725.suffix/1614272135802.jpeg', title: 'Aloo Roti', meat: 'N/A', base: 'Roti', spice_level: 'Not at all', dietary_restriction: 'Vegetarian', price: 5.00, rating: '87%', description: "Aloo Roti is a flatbread stuffed with spiced mashed potatoes. They go incredibly well with some type of curry dish!"},
        {image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/27/0/ZA0207H_chicken-in-creamy-tomato-curry-chicken-tikka-masala_s4x3.jpg.rend.hgtvcom.966.725.suffix/1387303023791.jpeg', title: "Chicken Tikka Masala", meat: "Chicken", base: "Rice", spice_level: "Spicy", dietary_restriction: "Gluten Free", price: 10.99, rating: '95%', description: "A staple in South Asian cuisine. Chicken tikka masala is a dish consisting of roasted marinated chicken chunks in a spice sauce"},
        {image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/8/2/0/ZA0304H_saag-paneer-spinach-with-indian-cheese_s4x3.jpg.rend.hgtvcom.966.725.suffix/1488497807789.jpeg', title: 'Saag Paneer', meat: 'N/A', base: 'Dosa', spice_level: 'Mild', dietary_restriction: 'Vegetarian', price: 7.50, rating: '93%', description: "Saag paneer is a classic Indian dish of cooked spinach sutdded with cubes of fried paneer cheese. Thickened with cream or coconut milk, it's a hearty and filling vegetarian meal"},
        {image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/1/07/0/FNK_Papdi-Chaat_s4x3.jpg.rend.hgtvcom.966.725.suffix/1546894451213.jpeg', title: 'Fish Papdi Chaat', meat: 'Fish', base: 'Dosa', spice_level: 'Mild', dietary_restriction: 'Halal', price: 21.99, rating: '98%', description: "One of our best dishes to date, fish papdi chaat combines the flavours of fresh vegetables with our exquisite grilled salmon cooked to perfection. This is a big hit whenever we host events at our venue, so why not give it a try? "},
        {image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/12/2/0/ED0105_Tandoori-Chicken_s4x3.jpg.rend.hgtvcom.966.725.suffix/1488497606312.jpeg', title: 'Tandoori Chicken', meat: 'Chicken', base: 'Rice', spice_level: "Extra Spicy", dietary_restriction: 'Halal', price: 12.99, rating: '97%', description: "Another cult classic, Tandoori chicken is a chicken dish that's been marinated in yogurt and spices and roasted in a tandoor or a cylindrical clay oven, which we will follow to this day to ensure the most authentic taste!"},
        {image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/9/17/0/ZA0105H_MumsEveyday-Red-Lentils_s4x3.jpg.rend.hgtvcom.966.725.suffix/1491591190515.jpeg', title: "Red Lentil Daal", meat: 'N/A', base: 'Roti', spice_level: 'Mild', dietary_restriction: 'Vegetarian', price: 9.99, rating: '94%', description: "Daal is one of the most common ingredients and dishes in Indian cuisine. Daal is typically made from lentils and legumes (we at Mickey's Munch use a combination of both), to form a thick, spicy stew that makes an excellent pairing for almost any other dish"},
        {image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/06/03/0/FNK_Baingan-Bharta_H2_s4x3.jpg.rend.hgtvcom.966.725.suffix/1654270355739.jpeg', title: "Baingan Bharta", meat: 'N/A', base: 'Rice', spice_level: 'Spicy', dietary_restriction: 'Gluten Free', price: 13.50, rating: '82%', description: "A very popular dish in North India, Baingan Bhartha is a smokey roasted eggplant mash mixed with Indian spices that goes really well with hot rotis, paratha and even a plate of rice. "},
        {image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/9/4/1/FNM_100112-TTAH-Aarti-Sequeira-Tomato-Yogurt-Chicken-Curry-Recipe_s4x3.jpg.rend.hgtvcom.966.725.suffix/1387306707895.jpeg', title: "Chicken Curry", meat: 'Chicken', base: 'Rice', spice_level: 'Spicy', dietary_restriction: 'Halal', price: 18.99, rating: '90%', description: "Chicken curry is made up of chicken stewed in onion and tomato based sauces, flavoured with garlic, ginger, tomato puree, chilli peppers and a myriad of other spices including turmeric, cumin, coriander, etc. Comes with a kick though so beware! "},
        {image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/12/17/0/ZA0204H_indian-rice-pudding_s4x3.jpg.rend.hgtvcom.966.725.suffix/1387303021896.jpeg', title: "Rice Pudding", meat: 'N/A', base: 'Rice', spice_level: 'Not at all', dietary_restriction: 'Gluten Free', price: 4.97, rating: '75%', description: "Rice pudding is a dish made from rice mixed with milk, cinammon, vanilla and raisins. A very common dessert menu item that is both sweet and nourishing. "},
        {image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/5/16/0/FNK_KHICHARI-H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1526486967909.jpeg', title: "Kichidi", meat: 'Beef', base: 'Rice', spice_level: 'Mild', dietary_restriction: 'Gluten Free', price: 12.50, rating: '83%', description: "Khicdhi is a team up rice and lentils making quite the nutritious meal that is similar to porridge but with plenty of flavour supplied by the ginger, cumin and jalapeno thrown in the mix. With flecks of fresh cilantro, Khichdi will definitely have you coming back for more. "},
        {image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/12/29/0/YK0402_Palak-Paneer_s4x3.jpg.rend.hgtvcom.966.725.suffix/1609274209978.jpeg', title: "Palak Paneer", meat: 'N/A', base: 'Naan', spice_level: 'Not at all', dietary_restriction: 'Vegetarian', price: 9.99, rating: '92%', description: "One of the staples of Indian cuisine, Paneer is an Indian cottage cheese that is cooked with spinash and spices to make a creamy and flavourful curry, mixed with our acclaimed Naan, you will be left with a sense of fulfillment after trying this combo!"},
        {image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/05/07/0/FNK_TIKKA_KEBABS_H_f_s4x3.jpg.rend.hgtvcom.966.725.suffix/1620410612851.jpeg', title: "Fish Skewers", meat: 'Fish', base: 'Rice', spice_level: 'Mild', dietary_restriction: 'Halal', price: 15.50, rating: '72%', description: "A bit of newer entry to our menu, but raring to be ordered by newcomers and veterans alike. With a variety of fish including Salmon, Bass, Tilapia and other common South Asian aquatic delights, there will be something for everyone!"}

    ];

    const meats = ['Beef', 'Chicken', 'Lamb', 'Goat', 'Fish', 'N/A'];
    const base = ['Rice', 'Dosa', 'Roti', 'Naan'];
    const spice_level = ['Not at all', 'Mild', 'Spicy', 'Extra Spicy'];
    const dietary_restrictions = ['Halal', 'Gluten Free', 'Kosher', 'Vegetarian'];

    return(
        <div>
            <NavBar></NavBar>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <FacetedSearch id="faceted-search-takeout" meals={meals} meats={meats} base={base} spice_level={spice_level} dietary_restrictions={dietary_restrictions}></FacetedSearch>
            <Footer></Footer>
        </div>
    )
}

export default TakeOut;

