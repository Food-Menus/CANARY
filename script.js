
fetch('Data_Menu_Page.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('menu_title_1').textContent = data.menu_title_1;
    document.getElementById('menu_title_2').textContent = data.menu_title_2;
    document.getElementById('menu_title_3').textContent = data.menu_title_3;
    
    document.getElementById('crep_type_1').textContent = data.crep_type_1;
    document.getElementById('crep_prise_1').textContent = data.crep_prise_1;
    document.getElementById('crep_type_2').textContent = data.crep_type_2;
    document.getElementById('crep_prise_2').textContent = data.crep_prise_2;
    document.getElementById('crep_type_3').textContent = data.crep_type_3;
    document.getElementById('crep_prise_3').textContent = data.crep_prise_3;
    document.getElementById('crep_type_4').textContent = data.crep_type_4;
    document.getElementById('crep_prise_4').textContent = data.crep_prise_4;
    document.getElementById('crep_type_5').textContent = data.crep_type_5;
    document.getElementById('crep_prise_5').textContent = data.crep_prise_5;
    document.getElementById('crep_type_6').textContent = data.crep_type_6;
    document.getElementById('crep_prise_6').textContent = data.crep_prise_6;
    document.getElementById('crep_type_7').textContent = data.crep_type_7;
    document.getElementById('crep_prise_7').textContent = data.crep_prise_7;
    document.getElementById('crep_type_8').textContent = data.crep_type_8;
    document.getElementById('crep_prise_8').textContent = data.crep_prise_8;
    document.getElementById('crep_type_9').textContent = data.crep_type_9;
    document.getElementById('crep_prise_9').textContent = data.crep_prise_9;
    document.getElementById('crep_type_10').textContent = data.crep_type_10;
    document.getElementById('crep_prise_10').textContent = data.crep_prise_10;
    document.getElementById('crep_type_11').textContent = data.crep_type_11;
    document.getElementById('crep_prise_11').textContent = data.crep_prise_11;
    document.getElementById('crep_type_12').textContent = data.crep_type_12;
    document.getElementById('crep_prise_12').textContent = data.crep_prise_12;
    document.getElementById('crep_type_13').textContent = data.crep_type_13;
    document.getElementById('crep_prise_13').textContent = data.crep_prise_13;
    document.getElementById('crep_type_14').textContent = data.crep_type_14;
    document.getElementById('crep_prise_14').textContent = data.crep_prise_14;
    document.getElementById('crep_type_15').textContent = data.crep_type_15;
    document.getElementById('crep_prise_15').textContent = data.crep_prise_15;
    document.getElementById('crep_type_16').textContent = data.crep_type_16;
    document.getElementById('crep_prise_16').textContent = data.crep_prise_16;
    document.getElementById('crep_type_17').textContent = data.crep_type_17;
    document.getElementById('crep_prise_17').textContent = data.crep_prise_17;

    document.getElementById('meal_type_1').textContent = data.meal_type_1;
    document.getElementById('meal_prise_1').textContent = data.meal_prise_1;
    document.getElementById('meal_content_1').textContent = data.meal_content_1;
    document.getElementById('meal_type_2').textContent = data.meal_type_2;
    document.getElementById('meal_prise_2').textContent = data.meal_prise_2;
    document.getElementById('meal_content_2').textContent = data.meal_content_2;
    document.getElementById('meal_type_3').textContent = data.meal_type_3;
    document.getElementById('meal_prise_3').textContent = data.meal_prise_3;
    document.getElementById('meal_content_3').textContent = data.meal_content_3;
    document.getElementById('meal_type_4').textContent = data.meal_type_4;
    document.getElementById('meal_prise_4').textContent = data.meal_prise_4;
    document.getElementById('meal_content_4').textContent = data.meal_content_4;
    document.getElementById('meal_type_5').textContent = data.meal_type_5;
    document.getElementById('meal_prise_5').textContent = data.meal_prise_5;
    document.getElementById('meal_content_5').textContent = data.meal_content_5;
    document.getElementById('meal_type_6').textContent = data.meal_type_6;
    document.getElementById('meal_prise_6').textContent = data.meal_prise_6;
    document.getElementById('meal_content_6').textContent = data.meal_content_6;
    document.getElementById('meal_type_7').textContent = data.meal_type_7;
    document.getElementById('meal_prise_7').textContent = data.meal_prise_7;
    document.getElementById('meal_content_7').textContent = data.meal_content_7;
    document.getElementById('meal_type_8').textContent = data.meal_type_8;
    document.getElementById('meal_prise_8').textContent = data.meal_prise_8;
    document.getElementById('meal_content_8').textContent = data.meal_content_8;

    document.getElementById('sandwich_type_1').textContent = data.sandwich_type_1;
    document.getElementById('sandwich_prise_1').textContent = data.sandwich_prise_1;
    document.getElementById('sandwich_type_2').textContent = data.sandwich_type_2;
    document.getElementById('sandwich_prise_2').textContent = data.sandwich_prise_2;
    document.getElementById('sandwich_type_3').textContent = data.sandwich_type_3;
    document.getElementById('sandwich_prise_3').textContent = data.sandwich_prise_3;
    document.getElementById('sandwich_type_4').textContent = data.sandwich_type_4;
    document.getElementById('sandwich_prise_4').textContent = data.sandwich_prise_4;
    document.getElementById('sandwich_type_5').textContent = data.sandwich_type_5;
    document.getElementById('sandwich_prise_5').textContent = data.sandwich_prise_5;
    document.getElementById('sandwich_type_6').textContent = data.sandwich_type_6;
    document.getElementById('sandwich_prise_6').textContent = data.sandwich_prise_6;
    document.getElementById('sandwich_type_7').textContent = data.sandwich_type_7;
    document.getElementById('sandwich_prise_7').textContent = data.sandwich_prise_7;
    document.getElementById('sandwich_type_8').textContent = data.sandwich_type_8;
    document.getElementById('sandwich_prise_8').textContent = data.sandwich_prise_8;
    document.getElementById('sandwich_type_9').textContent = data.sandwich_type_9;
    document.getElementById('sandwich_prise_9').textContent = data.sandwich_prise_9;
    document.getElementById('sandwich_type_10').textContent = data.sandwich_type_10;
    document.getElementById('sandwich_prise_10').textContent = data.sandwich_prise_10;
    document.getElementById('sandwich_type_11').textContent = data.sandwich_type_11;
    document.getElementById('sandwich_prise_11').textContent = data.sandwich_prise_11;
    document.getElementById('sandwich_type_12').textContent = data.sandwich_type_12;
    document.getElementById('sandwich_prise_12').textContent = data.sandwich_prise_12;
    document.getElementById('sandwich_type_13').textContent = data.sandwich_type_13;
    document.getElementById('sandwich_prise_13').textContent = data.sandwich_prise_13;


    document.getElementById('order_type_1').textContent = data.order_type_1;
    document.getElementById('order_prise_1').textContent = data.order_prise_1;
    document.getElementById('order_type_2').textContent = data.order_type_2;
    document.getElementById('order_prise_2').textContent = data.order_prise_2;
    document.getElementById('order_type_3').textContent = data.order_type_3;
    document.getElementById('order_prise_3').textContent = data.order_prise_3;
    document.getElementById('order_type_4').textContent = data.order_type_4;
    document.getElementById('order_prise_4').textContent = data.order_prise_4;
    document.getElementById('order_type_5').textContent = data.order_type_5;
    document.getElementById('order_prise_5').textContent = data.order_prise_5;
    document.getElementById('order_type_6').textContent = data.order_type_6;
    document.getElementById('order_prise_6').textContent = data.order_prise_6;
    document.getElementById('order_type_7').textContent = data.order_type_7;
    document.getElementById('order_prise_7').textContent = data.order_prise_7;
    document.getElementById('order_type_8').textContent = data.order_type_8;
    document.getElementById('order_prise_8').textContent = data.order_prise_8;
    document.getElementById('order_type_9').textContent = data.order_type_9;
    document.getElementById('order_prise_9').textContent = data.order_prise_9;
    document.getElementById('order_type_10').textContent = data.order_type_10;
    document.getElementById('order_prise_10').textContent = data.order_prise_10;
    document.getElementById('order_type_11').textContent = data.order_type_11;
    document.getElementById('order_prise_11').textContent = data.order_prise_11;
    document.getElementById('order_type_12').textContent = data.order_type_12;
    document.getElementById('order_prise_12').textContent = data.order_prise_12;
    document.getElementById('order_type_13').textContent = data.order_type_13;
    document.getElementById('order_prise_13').textContent = data.order_prise_13;
    document.getElementById('order_type_14').textContent = data.order_type_14;
    document.getElementById('order_prise_14').textContent = data.order_prise_14;
    document.getElementById('order_type_15').textContent = data.order_type_15;
    document.getElementById('order_prise_15').textContent = data.order_prise_15;
    document.getElementById('order_type_16').textContent = data.order_type_16;
    document.getElementById('order_prise_16').textContent = data.order_prise_16;


    
    document.getElementById('sandwich_type_2_1').textContent = data.sandwich_type_2_1;
    document.getElementById('sandwich_prise_2_1').textContent = data.sandwich_prise_2_1;
    document.getElementById('sandwich_type_2_2').textContent = data.sandwich_type_2_2;
    document.getElementById('sandwich_prise_2_2').textContent = data.sandwich_prise_2_2;
    document.getElementById('sandwich_type_2_3').textContent = data.sandwich_type_2_3;
    document.getElementById('sandwich_prise_2_3').textContent = data.sandwich_prise_2_3;
    document.getElementById('sandwich_type_2_4').textContent = data.sandwich_type_2_4;
    document.getElementById('sandwich_prise_2_4').textContent = data.sandwich_prise_2_4;
    document.getElementById('sandwich_type_2_5').textContent = data.sandwich_type_2_5;
    document.getElementById('sandwich_prise_2_5').textContent = data.sandwich_prise_2_5;
    document.getElementById('sandwich_type_2_6').textContent = data.sandwich_type_2_6;
    document.getElementById('sandwich_prise_2_6').textContent = data.sandwich_prise_2_6;
    document.getElementById('sandwich_type_2_7').textContent = data.sandwich_type_2_7;
    document.getElementById('sandwich_prise_2_7').textContent = data.sandwich_prise_2_7;
    document.getElementById('sandwich_type_2_8').textContent = data.sandwich_type_2_8;
    document.getElementById('sandwich_prise_2_8').textContent = data.sandwich_prise_2_8;
    document.getElementById('sandwich_type_2_9').textContent = data.sandwich_type_2_9;
    document.getElementById('sandwich_prise_2_9').textContent = data.sandwich_prise_2_9;
    document.getElementById('sandwich_type_2_10').textContent = data.sandwich_type_2_10;
    document.getElementById('sandwich_prise_2_10').textContent = data.sandwich_prise_2_10;
    document.getElementById('sandwich_type_2_11').textContent = data.sandwich_type_2_11;
    document.getElementById('sandwich_prise_2_11').textContent = data.sandwich_prise_2_11;
    document.getElementById('sandwich_type_2_12').textContent = data.sandwich_type_2_12;
    document.getElementById('sandwich_prise_2_12').textContent = data.sandwich_prise_2_12;
    document.getElementById('sandwich_type_2_13').textContent = data.sandwich_type_2_13;
    document.getElementById('sandwich_prise_2_13').textContent = data.sandwich_prise_2_13;
    document.getElementById('sandwich_type_2_14').textContent = data.sandwich_type_2_14;
    document.getElementById('sandwich_prise_2_14').textContent = data.sandwich_prise_2_14;
    document.getElementById('sandwich_type_2_15').textContent = data.sandwich_type_2_15;
    document.getElementById('sandwich_prise_2_15').textContent = data.sandwich_prise_2_15;
    document.getElementById('sandwich_type_2_16').textContent = data.sandwich_type_2_16;
    document.getElementById('sandwich_prise_2_16').textContent = data.sandwich_prise_2_16;
    document.getElementById('sandwich_type_2_17').textContent = data.sandwich_type_2_17;
    document.getElementById('sandwich_prise_2_17').textContent = data.sandwich_prise_2_17;
    document.getElementById('sandwich_type_2_18').textContent = data.sandwich_type_2_18;
    document.getElementById('sandwich_prise_2_18').textContent = data.sandwich_prise_2_18;
    document.getElementById('sandwich_type_2_19').textContent = data.sandwich_type_2_19;
    document.getElementById('sandwich_prise_2_19').textContent = data.sandwich_prise_2_19;
    document.getElementById('sandwich_type_2_20').textContent = data.sandwich_type_2_20;
    document.getElementById('sandwich_prise_2_20').textContent = data.sandwich_prise_2_20;

    document.getElementById('syren_type_1').textContent = data.syren_type_1;
    document.getElementById('syren_prise_1').textContent = data.syren_prise_1;
    document.getElementById('syren_type_2').textContent = data.syren_type_2;
    document.getElementById('syren_prise_2').textContent = data.syren_prise_2;
    document.getElementById('syren_type_3').textContent = data.syren_type_3;
    document.getElementById('syren_prise_3').textContent = data.syren_prise_3;
    document.getElementById('syren_type_4').textContent = data.syren_type_4;
    document.getElementById('syren_prise_4').textContent = data.syren_prise_4;
    document.getElementById('syren_type_5').textContent = data.syren_type_5;
    document.getElementById('syren_prise_5').textContent = data.syren_prise_5;
    document.getElementById('syren_type_6').textContent = data.syren_type_6;
    document.getElementById('syren_prise_6').textContent = data.syren_prise_6;
    document.getElementById('syren_type_7').textContent = data.syren_type_7;
    document.getElementById('syren_prise_7').textContent = data.syren_prise_7;
    document.getElementById('syren_type_8').textContent = data.syren_type_8;
    document.getElementById('syren_prise_8').textContent = data.syren_prise_8;
    document.getElementById('syren_type_9').textContent = data.syren_type_9;
    document.getElementById('syren_prise_9').textContent = data.syren_prise_9;
    document.getElementById('syren_type_10').textContent = data.syren_type_10;
    document.getElementById('syren_prise_10').textContent = data.syren_prise_10;
    document.getElementById('syren_type_11').textContent = data.syren_type_11;
    document.getElementById('syren_prise_11').textContent = data.syren_prise_11;
    document.getElementById('syren_type_12').textContent = data.syren_type_12;
    document.getElementById('syren_prise_12').textContent = data.syren_prise_12;
    document.getElementById('syren_type_13').textContent = data.syren_type_13;
    document.getElementById('syren_prise_13').textContent = data.syren_prise_13;
    document.getElementById('syren_type_14').textContent = data.syren_type_14;
    document.getElementById('syren_prise_14').textContent = data.syren_prise_14;
    document.getElementById('syren_type_15').textContent = data.syren_type_15;
    document.getElementById('syren_prise_15').textContent = data.syren_prise_15;
    document.getElementById('syren_type_16').textContent = data.syren_type_16;
    document.getElementById('syren_prise_16').textContent = data.syren_prise_16;
    document.getElementById('syren_type_17').textContent = data.syren_type_17;
    document.getElementById('syren_prise_17').textContent = data.syren_prise_17;
    document.getElementById('syren_type_18').textContent = data.syren_type_18;
    document.getElementById('syren_prise_18').textContent = data.syren_prise_18;
    document.getElementById('syren_type_19').textContent = data.syren_type_19;
    document.getElementById('syren_prise_19').textContent = data.syren_prise_19;
    document.getElementById('syren_type_20').textContent = data.syren_type_20;
    document.getElementById('syren_prise_20').textContent = data.syren_prise_20;   
    document.getElementById('syren_type_21').textContent = data.syren_type_21;
    document.getElementById('syren_prise_21').textContent = data.syren_prise_21;

    document.getElementById('sandwich_checkin_type_1').textContent = data.sandwich_checkin_type_1;
    document.getElementById('sandwich_checkin_prise_1').textContent = data.sandwich_checkin_prise_1;
    document.getElementById('sandwich_checkin_type_2').textContent = data.sandwich_checkin_type_2;
    document.getElementById('sandwich_checkin_prise_2').textContent = data.sandwich_checkin_prise_2;
    document.getElementById('sandwich_checkin_type_3').textContent = data.sandwich_checkin_type_3;
    document.getElementById('sandwich_checkin_prise_3').textContent = data.sandwich_checkin_prise_3;
    document.getElementById('sandwich_checkin_type_4').textContent = data.sandwich_checkin_type_4;
    document.getElementById('sandwich_checkin_prise_4').textContent = data.sandwich_checkin_prise_4;
    document.getElementById('sandwich_checkin_type_5').textContent = data.sandwich_checkin_type_5;
    document.getElementById('sandwich_checkin_prise_5').textContent = data.sandwich_checkin_prise_5;
    document.getElementById('sandwich_checkin_type_6').textContent = data.sandwich_checkin_type_6;
    document.getElementById('sandwich_checkin_prise_6').textContent = data.sandwich_checkin_prise_6;
    document.getElementById('sandwich_checkin_type_7').textContent = data.sandwich_checkin_type_7;
    document.getElementById('sandwich_checkin_prise_7').textContent = data.sandwich_checkin_prise_7;
    document.getElementById('sandwich_checkin_type_8').textContent = data.sandwich_checkin_type_8;
    document.getElementById('sandwich_checkin_prise_8').textContent = data.sandwich_checkin_prise_8;
    document.getElementById('sandwich_checkin_type_9').textContent = data.sandwich_checkin_type_9;
    document.getElementById('sandwich_checkin_prise_9').textContent = data.sandwich_checkin_prise_9;
    document.getElementById('sandwich_checkin_type_10').textContent = data.sandwich_checkin_type_10;
    document.getElementById('sandwich_checkin_prise_10').textContent = data.sandwich_checkin_prise_10;
    document.getElementById('sandwich_checkin_type_11').textContent = data.sandwich_checkin_type_11;
    document.getElementById('sandwich_checkin_prise_11').textContent = data.sandwich_checkin_prise_11;
    document.getElementById('sandwich_checkin_type_12').textContent = data.sandwich_checkin_type_12;
    document.getElementById('sandwich_checkin_prise_12').textContent = data.sandwich_checkin_prise_12;
    document.getElementById('sandwich_checkin_type_13').textContent = data.sandwich_checkin_type_13;
    document.getElementById('sandwich_checkin_prise_13').textContent = data.sandwich_checkin_prise_13;

    document.getElementById('sandwich_beef_1').textContent = data.sandwich_beef_1;
    document.getElementById('beef_prise_1').textContent = data.beef_prise_1;
    document.getElementById('sandwich_beef_2').textContent = data.sandwich_beef_2;
    document.getElementById('beef_prise_2').textContent = data.beef_prise_2;
    document.getElementById('sandwich_beef_3').textContent = data.sandwich_beef_3;
    document.getElementById('beef_prise_3').textContent = data.beef_prise_3;
    document.getElementById('sandwich_beef_4').textContent = data.sandwich_beef_4;
    document.getElementById('beef_prise_4').textContent = data.beef_prise_4;
    document.getElementById('sandwich_beef_5').textContent = data.sandwich_beef_5;
    document.getElementById('beef_prise_5').textContent = data.beef_prise_5;

    document.getElementById('see_food_1').textContent = data.see_food_1;
    document.getElementById('see_food_prise_1').textContent = data.see_food_prise_1;
    document.getElementById('see_food_2').textContent = data.see_food_2;
    document.getElementById('see_food_prise_2').textContent = data.see_food_prise_2;
    document.getElementById('see_food_3').textContent = data.see_food_3;
    document.getElementById('see_food_prise_3').textContent = data.see_food_prise_3;

    document.getElementById('sandwich_shawerma_1').textContent = data.sandwich_shawerma_1;
    document.getElementById('shawerma_prise_1').textContent = data.shawerma_prise_1;
    document.getElementById('sandwich_shawerma_2').textContent = data.sandwich_shawerma_2;
    document.getElementById('shawerma_prise_2').textContent = data.shawerma_prise_2;
    document.getElementById('sandwich_shawerma_3').textContent = data.sandwich_shawerma_3;
    document.getElementById('shawerma_prise_3').textContent = data.shawerma_prise_3;
    document.getElementById('sandwich_shawerma_4').textContent = data.sandwich_shawerma_4;
    document.getElementById('shawerma_prise_4').textContent = data.shawerma_prise_4;

    document.getElementById('Additions_type_1').textContent = data.Additions_type_1;
    document.getElementById('Additions_prise_1').textContent = data.Additions_prise_1;
    document.getElementById('Additions_type_2').textContent = data.Additions_type_2;
    document.getElementById('Additions_prise_2').textContent = data.Additions_prise_2;
    document.getElementById('Additions_type_3').textContent = data.Additions_type_3;
    document.getElementById('Additions_prise_3').textContent = data.Additions_prise_3;
    document.getElementById('Additions_type_4').textContent = data.Additions_type_4;
    document.getElementById('Additions_prise_4').textContent = data.Additions_prise_4;
    document.getElementById('Additions_type_5').textContent = data.Additions_type_5;
    document.getElementById('Additions_prise_5').textContent = data.Additions_prise_5;
    document.getElementById('Additions_type_6').textContent = data.Additions_type_6;
    document.getElementById('Additions_prise_6').textContent = data.Additions_prise_6;
    document.getElementById('Additions_type_7').textContent = data.Additions_type_7;
    document.getElementById('Additions_prise_7').textContent = data.Additions_prise_7;
    document.getElementById('Additions_type_8').textContent = data.Additions_type_8;
    document.getElementById('Additions_prise_8').textContent = data.Additions_prise_8;
    document.getElementById('Additions_type_9').textContent = data.Additions_type_9;
    document.getElementById('Additions_prise_9').textContent = data.Additions_prise_9;
    document.getElementById('Additions_type_10').textContent = data.Additions_type_10;
    document.getElementById('Additions_prise_10').textContent = data.Additions_prise_10;
    document.getElementById('Additions_type_11').textContent = data.Additions_type_11;
    document.getElementById('Additions_prise_11').textContent = data.Additions_prise_11;

    document.getElementById('appetizers_type_1').textContent = data.appetizers_type_1;
    document.getElementById('appetizers_prise_1').textContent = data.appetizers_prise_1;
    document.getElementById('appetizers_type_2').textContent = data.appetizers_type_2;
    document.getElementById('appetizers_prise_2').textContent = data.appetizers_prise_2;
    document.getElementById('appetizers_type_3').textContent = data.appetizers_type_3;
    document.getElementById('appetizers_prise_3').textContent = data.appetizers_prise_3;
    document.getElementById('appetizers_type_4').textContent = data.appetizers_type_4;
    document.getElementById('appetizers_prise_4').textContent = data.appetizers_prise_4;
    document.getElementById('appetizers_type_5').textContent = data.appetizers_type_5;
    document.getElementById('appetizers_prise_5').textContent = data.appetizers_prise_5;
    document.getElementById('appetizers_type_6').textContent = data.appetizers_type_6;
    document.getElementById('appetizers_prise_6').textContent = data.appetizers_prise_6;

    document.getElementById('drinks_type_1').textContent = data.drinks_type_1;
    document.getElementById('drinks_prise_1').textContent = data.drinks_prise_1;
    document.getElementById('drinks_type_2').textContent = data.drinks_type_2;
    document.getElementById('drinks_prise_2').textContent = data.drinks_prise_2;
    document.getElementById('drinks_type_3').textContent = data.drinks_type_3;
    document.getElementById('drinks_prise_3').textContent = data.drinks_prise_3;

    document.getElementById('news_type_1').textContent = data.news_type_1;
    document.getElementById('news_content_1').textContent = data.news_content_1;
    document.getElementById('news_type_2').textContent = data.news_type_2;
    document.getElementById('news_content_2').textContent = data.news_content_2;
    document.getElementById('news_type_3').textContent = data.news_type_3;
    document.getElementById('news_content_3').textContent = data.news_content_3;
    document.getElementById('news_type_4').textContent = data.news_type_4;
    document.getElementById('news_content_4').textContent = data.news_content_4;
    document.getElementById('news_type_5').textContent = data.news_type_5;
    document.getElementById('news_content_5').textContent = data.news_content_5;
    document.getElementById('news_type_6').textContent = data.news_type_6;
    document.getElementById('news_content_6').textContent = data.news_content_6;
    document.getElementById('news_type_7').textContent = data.news_type_7;
    document.getElementById('news_content_7').textContent = data.news_content_7;
    document.getElementById('news_type_8').textContent = data.news_type_8;
    document.getElementById('news_content_8').textContent = data.news_content_8;
    document.getElementById('news_type_9').textContent = data.news_type_9;
    document.getElementById('news_content_9').textContent = data.news_content_9;
    document.getElementById('news_type_10').textContent = data.news_type_10;
    document.getElementById('news_content_10').textContent = data.news_content_10;

  });