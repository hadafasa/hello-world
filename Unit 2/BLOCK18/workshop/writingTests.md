## WRITING TEST SPECIFICATIONS

## UNIT TEST SPECIFICATIONS FOR "MULTIPLICATION" FUNCTION

- Expect Multiplication (2, 3) to be a number </br>
- Expect Multiplication (2, 3) to be equal to 6 </br>
- Expect Multiplication ("a", 3) to be an error </br>
- Expect Multiplication (2, "b") to be an error </br>
- Expect Multiplication (null, 3) to be an error </br>
- Expect Multiplication (undefined, 3) to be an error </br>
- Expect Multiplication (0, 3) to be equal to 0 </br>
- Expect Multiplication (2, 0) to be equal to 0 </br>

## UNIT TEST SPECIFICATIONS FOR "concatOdds" FUNCTION

- Expect concatODDs(([3, 2, 1]),[9, 1, 1, 1, 4, 15, -1]) to be an array </br>
- Expect concatODDs(([3, 2, 1]),[9, 1, 1, 1, 5, 15, -1]) to contain only odd numbers </br>
- Expect concatODDs(([3, 2, 1]),[9, 1, 1, 1, 5, 15, -1]) to be sorted in ascending order </br>
- Expect concatODDs(([3, 2, 1]),[]) to be an empty array </br>
- Expect concatODDs(([]),[9, 1, 1, 1, 5, 15, -1]) to be [-1, 1, 9, 15] </br>
- Expect concatODDs(([ ]),[ ]) to be an empty array </br>

## FUNCTIONAL TEST SPECIFICATIONS FOR "SHOPPING CART CHECKOUT" FEATURE

- When a user clicks "Checkout" button without adding any item to the cart, they should be shown an error message "Your cart is empty" </br>
- When a user clicks "Checkout" button with items in the cart, they should be redirected to the checkout page </br>
- When a user checks out as a guest, they should be asked to provide their shipping information </br>
- When a user logs in to check out, their saved shipping information should be automatically populated </br>
- When a user checks out as a guest, they should be asked if they want to create an account or log in </br>
- When a user creates an account during checkout, their shipping information should be automatically populated in their account information </br>
- When a user completes the checkout process, they should see a confirmation page with the order summary and shipping information </br>