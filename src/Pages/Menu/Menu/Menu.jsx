import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';



const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            <Cover img={menuImg} title={'our menu'}></Cover>
            <SectionTitle subHeading={'Do not Miss'} heading={"Today's Offer"}></SectionTitle>
           <MenuCategory items={offered}></MenuCategory>
           <MenuCategory title={'Dessert'} coverImg={dessertImg} items={dessert}></MenuCategory>
           <MenuCategory title={'pizza'} coverImg={pizzaImg} items={pizza}></MenuCategory>
           <MenuCategory title={'salad'} coverImg={saladImg} items={salad}></MenuCategory>
           <MenuCategory title={'soup'} coverImg={soupImg} items={soup}></MenuCategory>

            
        </div>
    );
};

export default Menu;