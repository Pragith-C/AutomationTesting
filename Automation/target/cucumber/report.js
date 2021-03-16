$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Search and place order for Vegetables",
  "description": "",
  "id": "search-and-place-order-for-vegetables",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Search for items and validate results",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-validate-results",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on Greencart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User searched for \u003cName\u003e Vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User proceeded to Checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify selected \u003cName\u003e items are displayed in Check out page",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-validate-results;",
  "rows": [
    {
      "cells": [
        "Name"
      ],
      "line": 18,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-validate-results;;1"
    },
    {
      "cells": [
        "Brinjal"
      ],
      "line": 19,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-validate-results;;2"
    },
    {
      "cells": [
        "Beetroot"
      ],
      "line": 20,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-validate-results;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Search for items and validate results",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-validate-results;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on Greencart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User searched for Brinjal Vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User proceeded to Checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify selected Brinjal items are displayed in Check out page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "myStepDefinitions.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 3903356464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 18
    }
  ],
  "location": "myStepDefinitions.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3272024194,
  "status": "passed"
});
formatter.match({
  "location": "myStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "duration": 133172700,
  "status": "passed"
});
formatter.match({
  "location": "myStepDefinitions.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 103179817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 16
    }
  ],
  "location": "stepDefination.verify_selected_items_are_displayed_in_check_out_page(String)"
});
formatter.result({
  "duration": 26742143,
  "status": "passed"
});
formatter.after({
  "duration": 87577789,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search for items and validate results",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-validate-results;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on Greencart Landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User searched for Beetroot Vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User proceeded to Checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "verify selected Beetroot items are displayed in Check out page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "myStepDefinitions.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 4391716544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 18
    }
  ],
  "location": "myStepDefinitions.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 3137162253,
  "status": "passed"
});
formatter.match({
  "location": "myStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "duration": 124677419,
  "status": "passed"
});
formatter.match({
  "location": "myStepDefinitions.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 101315500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 16
    }
  ],
  "location": "stepDefination.verify_selected_items_are_displayed_in_check_out_page(String)"
});
formatter.result({
  "duration": 25273050,
  "status": "passed"
});
formatter.after({
  "duration": 81772665,
  "status": "passed"
});
});