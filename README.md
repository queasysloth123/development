# Development

### Link to Deployed Website
If you used the stencil code, this is `https://queasysloth123.github.io/development`

### Goal and Value of the Application
The goal of the application is to allow users who play Valorant to know how much a cart of in-game guns would cost.
The value of this application is to help players know what sequence of guns to buy without overspending between game rounds.

### Usability Principles Considered
I had the different types of filters and sortings in a expandable and collapsable section so that users don't feel overwhelmed with all the different options. I chose the most appropriate input types that fit the nature of each sorts and filters section. I also followed a conventional layout of placing the filters on the left side to make navigation more intuitive.

### Organization of Components
`WeaponItem` represents the different cards that display basic information of each purchasable weapon. I added a button to ensure that there is some way to add the weapon to the shopping cart.

`CartItem` represents all the weapons that were added to the shopping cart. Each `CartItem` also include increment and decrement buttons to change the quantity of each item in the cart.

### How Data is Passed Down Through Components
In addition to its basic information, `WeaponItem` also takes in an `addItem` function, which gives the buy button for each weapon card functionality. 

Similarly, `CartItem` takes in basic information of the weapon added to the cart. I also pass in an `incItem` and `decItem` to increase and decrease the quantity values of any item in the cart. 

### How the User Triggers State Changes
`sortBy` is a state that keeps track of what the shopping list of weapons are currently being sorted by, such as name, price, category, and fire rate. Since the items can only be sorted by one type at a time, I only used one variable, which is triggered by the checking of the radio buttons under the Sort By category.

`sortedWeaponData` is an array of all the purchasable weapons and its basic info that keeps track of their sorted order, which is dictated by the `sortBy` state. `sortedWeaponData` is used to display the weapons in the shopping list in a specific order.

`costRange` is a state that keeps track of the price range filter. This state has two values, which correspond to the minimum and maximum prices of the weapons that the user wants to view. This array of values are triggered by moving both sliders of the slider input under the Price Range section.

`isCheckedSMGs, isCheckedHeavyWeapons, isCheckedAssaultRifles, isCheckedShotguns, isCheckedSidearms, isCheckedSniperRifles` are states that keep track of whether or not a specific category is checked in the filters section. In order to make it easier for me to access these states by category name, I made a dictionary called `check` that indexes into these states by category name. I use `check` to call and update these states, which are triggered by the the (un)checking of the category checkboxes.

The `cart` state is a dictionary keeps track of the items that are currently in the cart, where its key is the item name and the value is its count. This is triggered when the user clicks "BUY" on a weapon card or if the user clicks the add and minus buttons in the shopping cart.

The `total` state is an integer that keeps track of the total price of the cart items (aggregate). This state is triggered the ways that `cart` is triggered (mentioned above).