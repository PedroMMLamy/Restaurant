# ProjectTwo

# Tresbien-Restaurant 

**Description: Platform for book tables at a restaurant.**

## User stories
- **404** - This type of pages will orient the the user’s website navigation, every time a page that doesn’t exist is reached.

- **500** - This type of page shows to the user when there’s a difficulty in processing data from the server, that the Admin must fix.

- **login-signup** - The interaction of the user with the main page  is made by logging in as an existing user, or signing up with a new account.

- **add-signup** - The user is able to sign up and access their profile page to make a table reservation.

- **homepage** - The users can access their profile from the home page. In this section, they are also able to select a table, make a reservation, edit the reservation and delete it.

- **table-search** - results The users can search for available tables through their number, as well as revert to the home page when the search is complete.

- **table reservation-form** -  The user is able to access the available tables, make a reservation, edit the reservation, delete the reservation and know the status of a certain table by clicking it. Last, it is possible to revert to the search results page whenever the user wants.

- **table reservation** -  There is a confirmation that a reservation was made, requiring the user to register their contact information within a page. It is possible to revert to the main page whenever the user feels it’s time to go back to the home page.

- **user-profile** -  Editing, adding new information and comments is possible to the user in this page. Reverting to the home page  whenever this tasks are concluded is also possible.

- **confirmation** - The users get a message notification every time they make a table reservation.

<br>

## API routes (back-end)

- GET /
- renders login-signup.hbs

- GET /auth/signup
- redirects to / if user logged in
- renders add-signup.hbs

- POST /auth/signup
- redirects to / if user logged in
- body:
- email
- password
- full name
- birthday
- gender
- address
- phone
- client comment

- POST /auth/login
- redirects to / if user logged in
- body:
- email
- password
- POST /auth/logout
- body: (empty)
- GET /
- renders homepage.hbs (the profile preview + search form)
- POST /homepage (search action)
- body:
- table number
- table description
- GET /table-search-results
- renders table-search-results.hbs
- includes the list of tables
- redirects to / if user presses button

-GET /reservation-form/:id
- renders reservation-form.hbs
- redirects to /game-search-results if user presses button

-POST /reservation-form/:id
- body:
- date
- table availability

-GET /confirmation
- renders confirmation.hbs
- redirects to / if user presses button

-GET /profile
- renders user-profile.hbs
- redirects to / if user presses button
- POST /profile (to edit profile)
- redirects to /add-signup 
- body:
- email
- password
- full name
- birthday
- gender
- address
- phone
- client review
- POST /profile (to add comment)
- body:
- comment box
- date

-GET /profile
- renders user-profile.hbs updated
- redirects to / if user presses button

-GET /reservation
- renders reservation.hbs
- redirects to / if user presses button

-GET /confirmation (for client)
- renders confirmation.hbs
- redirects to /reservation if user presses button

<br>

## Models :


- UserModel  
 ```

	const userSchema = new Schema(
    {
        username: {
             type: String,
             trim: true,
             required: [true, 'Username is required.'],
             Unique: [true, 'This Username is already exist.']
       },
        passwordHash: 
            {
            type: String,
            required: true
      },
        email: {
            type: String,
            required: [true, 'Email is required.'],
             match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
            unique: true,
            lowercase: true,
            trim: true
     },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        }
    },
        {
            timestamps: true
        }
);
 ```

- TableModel
 ```

var tableSchema = new mongoose.Schema({
  name: String,
  isAvailable: Boolean,
  reservation: {
    required: false,
    type: reservationSchema
  }
});
 ```

- ReservationModel
 ```
 
var reservationSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String
});
 ```

<br>

## Backlog
Confirmation.hbs
Table description
Confirmation button

- User profile
- Comment form
- Check table availability
- Past comments

- Reservation
- Contact button
- Home button 

- Homepage
- Search table




## Links
[Trello Link](https://trello.com/invite/b/S4pIlmNs/cc1cd6e72021e0bed308e2be32fa2e53/ironhack-restaurant)

### Git
[Repository Link]()

[Deploy Link]()
<br>
### Slides
