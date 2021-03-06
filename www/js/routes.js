"use strict";
var routes = [
  // Index page
  {
      path: '/',
      url: './index.html',
      name: 'home',
  },
  // Restaurants page
  {
      path: '/restaurants/',
      url: './pages/restaurants.html',
      name: 'restaurants',
  },
  // Restaurants page Single
  {
      path: '/restaurant_single/',
      url: './pages/restaurant_single.html',
      name: 'restaurant_single',
  },
  // Chefs
  {
      path: '/chefs/',
      url: './pages/chefs.html',
      name: 'chefs',
  },
  // Recipes
  {
      path: '/recipes/',
      url: './pages/recipes.html',
      name: 'recipes',
  },
  // Single Recipes
  {
      path: '/recipe_single/',
      url: './pages/recipe_single.html',
      name: 'recipe_single',
      on: {
          pageInit: function () {
              $$('.list-ingredients').find('input[type="checkbox"]').each(function () {
                  if ($$(this).attr("checked") == "checked") {
                      $$(this).parent().parent().css("text-decoration", "line-through");
                  }
              });

              $$('.list-ingredients input[type="checkbox"]').change(function () {
                  console.log($$(this).attr("checked"));
                  if ($$(this).attr("checked") == "checked") {
                      $$(this).parent().parent().css("text-decoration", "none");
                      $$(this).attr("checked", false);
                  } else {
                      $$(this).parent().parent().css("text-decoration", "line-through");
                      $$(this).attr("checked", "checked");

                  }
              })

          }
      }
  },
  // Order Food
  {
      path: '/order_food/',
      url: './pages/order_food.html',
      name: 'order_food',
  },
  // Food Single
  {
      path: '/food_single/',
      url: './pages/food_single.html',
      name: 'food_single',
  },
  // Cehckout
  {
      path: '/checkout/',
      url: './pages/checkout.html',
      name: 'checkout',
  },
  // Profil
  {
      path: '/profile/',
      url: './pages/profile.html',
      name: 'profile',
  },
  // Login
  {
      path: '/login/',
      url: './pages/login.html',
      name: 'login',
  },
  // Register
  {
      path: '/register/',
      url: './pages/register.html',
      name: 'register',
  },
  // Pages
  {
      path: '/pages/',
      url: './pages/pages.html',
      name: 'pages',
  },
  {
      path: '/carryout/',
      url: './pages/carryout.html',
      name: 'carryout',
  },
    {
        path: '/login_new/',
        url: './pages/login_new.html',
        name: 'login_new',
    },
    {
        path: '/giftcard/',
        url: './pages/giftcard.html',
        name: 'giftcardzz',
    },
    {
        path: '/new_rewards/',
        url: './pages/new_rewards.html',
        name: 'new_rewards',
    },
    {
        path: '/manageservice/',
        url: './pages/manageservice.html',
        name: 'manageservice',
    },

    {
        path: '/coupon/',
        url: './pages/coupon.html',
        name: 'coupon',
    },
    {
        path: '/coupon_list/',
        url: './pages/coupon_list.html',
        name: 'coupon_list',
    },
      {
          path: '/setup/',
          url: './pages/setup.html',
          name: 'setup',
      },
       {
           path: '/food_list/',
           url: './pages/food_list.html',
           name: 'food_list',
       },
       // Profil
  {
      path: '/my_profile/',
      url: './pages/my_profile.html',
      name: 'my_profile',
  },
  // Foods
  {
      path: '/foods/',
      url: './pages/foods.html',
      name: 'foods',
  },
  //Dine-In
    {
        path: '/dinein_list/',
        url: './pages/dinein_list.html',
        name: 'dinein_list',
    },
  // Default route (404 page). MUST BE THE LAST
  {
      path: '(.*)',
      url: './pages/404.html',
  },
];
