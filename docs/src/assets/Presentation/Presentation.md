# Ruby on Rails Presentation

![Slide1](/src/assets/Presentation/Slides/Slide1.jpg)
“Ruby on Rails: Presented by myself Aaron Douglas, Matthew McCann, Lucas Weir and Andrew Jackson” 

“Rails is an open-source application that thousands of people have contributed too.” 

“Written using the Ruby programming language by David Hansson and released in 2004” 

“The framework allows a web designer to work on both the front and back-end” 

![Slide2](/src/assets/Presentation/Slides/Slide2.jpg)

![Slide3](/src/assets/Presentation/Slides/Slide3.jpg)
MVC 

Let’s take a more in depth look at the MVC. MVC stands for Model, View, Controller, which are the three components that make up this common design pattern.  

First, we have the model, now, you could say that this is the backbone of the whole pattern. The model is essentially the logic handler, which encompasses data management and business logic. It’s responsible for validation, storage and retrieval of data from the database, defining relationships between different entities, for example one user, user being our entity, having many posts, posts being another entity.  The model is also responsible for defining attributes, like user name, user email and so on, and it handles data transformation and formatting. So, to summarise, the model handles data, and communication with the database. 

Then we have the View, which is the user facing side of the pattern. It’s responsible for rendering the user interface and taking data from the model and making it suitable for an end user, think turning raw data from a database into a visual graph. In Rails, the view is typically an HTML page, but it can also display data in other formats like JSON or maybe XML if we’re talking about a response from an API. When it comes to Ruby on Rails specifically, the View can make use of “embedded Ruby” mostly known by its abbreviation ERB, which can be used to dynamically create HTML. 

And finally, we have the Controller, the mediator between the Model and the View. It’s responsible for handling user input, HTTP requests managing application logic, telling the model to fetch data or update data, and selecting an appropriate view to render the

![Slide4](/src/assets/Presentation/Slides/Slide4.jpg)
ORM 

Moving on now to ORM, or Object-Relational Mapping. ORM is a method of converting data from a database into a virtual database within an object-oriented programming language. So, for instance, let’s go back to our hypothetical user entity from the model. In an object-oriented programming language, the user entity may have several attributes, like name, home address, phone number, email address, so on and so on. ORM acts as a sort of translation layer, turning that sort of entity data into data that can be stored in a regular database. And it works the other way around, ORM can be used to take data from a database and pull it into the program, allowing for easy manipulation of that data from within an object-oriented programming language. In Ruby on Rails specifically, the implementation of ORM available to developers is called Active Record. Active Record allows us to perform regular CRUD operations using Ruby Methods instead of dealing directly with SQL, which simplifies the process by allowing developers to treat data from a database just like objects in their programming language. It also lets us define relationships between attributes that reflect the same sort of relationships in a database table. 


![Slide5](/src/assets/Presentation/Slides/Slide5.jpg)
REST 

REST, or Representational State Transfer, is an architectural style used to design networked applications. REST uses HTTP requests to access and manipulate data through normal HTTP methods like POST, PUT and DELETE. Since its inception in 2000, it has become widely supported across the web. 

Rails embraces REST principles by default, organizing applications around resources that can be created, read, updated, and deleted. Each resource is identified by a unique URL. Rails automatically generates routes for the resources in the application. So, here’s an example, a GET request to “users” would retrieve a list of users and probably return it in JSON or XML format, while a POST request to the same URL would create a new user. 

REST follows key principles like statelessness which means that each request contains all information needed to process it. 

That wraps up all the key concepts you need to know about to understand how Rails works. 

![Slide6](/src/assets/Presentation/Slides/Slide6.jpg)
Routes and Actions 

As part of this presentation there is a Ruby on Rails Tutorial for you to follow, but to give you an idea of what Rails looks like, I will now talk you through some of the code from that tutorial. 

Route Code 

Before you can do anything with a Rails application you need to define some routes. These routes interpret incoming web requests and connect them to a page and an action. In this example I have defined routes for the Index page, the Task Page, and the Create new Task page. There are also routes created for Updating and Deleting tasks, these do not have their own pages but still trigger an action. 

To define a route, you specify the type of request that this route will serve, then you give it a path before assigning it an action from the controller. For the purpose of this example our controller is known as ‘to-do.’ 

Action Code 

Each of the routes we defined corresponds to an action. These actions are defined within an application controller. A snippet from the controller you’ll create in the tutorial demonstrates how we create the index and show actions, which are triggered when we visit the index and task pages. 
 
In the index action we are collecting all the Tasks from our database and storing them in the tasks variable. 

In the show action we are still fetching tasks but rather than just getting all of them we are searching for a specific task based on the ID parameter that is supplied as part of the URL, when we visit the task page. This is also then stored in a variable. 

Result 

This snippet from the running application displays the Task Page and the result of the corresponding show, action. 

![Slide7](/src/assets/Presentation/Slides/Slide7.jpg)
Embedded Ruby 

Ruby on Rails provides the user with a templating language, that allows them to embedded ruby code within their HTML documents. This is Embedded Ruby. In this example we have used ERB to generate a list of tasks, which are stored in the tasks variable we defined when creating our actions for the index page. To do this we use a Ruby ‘for each’ loop where we add a list item for every task in the variable. This list item then provides a link to the task_path with the tasks ID. This looks something like /tasks/1. You can see what this code looks like when the application is running.

![Slide8](/src/assets/Presentation/Slides/Slide8.jpg)
Models and Migrations 

In most if not all Rails applications you will be creating and using models. Models are used to represent data and are connected to a database. They typically handle database operations like CRUD, validation, and relationships. We can generate our model making use of the Rails generator [Point to command]. We can now make any changes we wish, in this example we set up our Task model to have some validation in the form of every task requiring a title. 

Migrations are used to update and make changes to the database. Migration files will be automatically created when we generate our model, although these can be changed before execution. This snippet here shows how we would go about changing the Database Schema to include a new table. Here we use the change function as we are changing the Database, then we create a table called tasks, which has a title, description and completed attributes. The title being a string, description being text and completed being a Boolean that defaults to false. There is also a timestamp attribute that is created automatically by Rails, this stores the time of creation and of the most recent update, this also managed by rails, so we don’t need to worry about it when we update any values in the table. 

To make these changes we simply execute the command seen here [Point to command]. This will run all migration files and apply any changes. 

![Slide9](/src/assets/Presentation/Slides/Slide9.jpg)
Rapid Design and Deployment 

Ruby on Rails is well suited for projects that need rapid design and deployment. Its convention-over-configuration philosophy allows developers to quickly set up applications without rapidly. Its comprehensive suite of built-in tools and libraries, tasks such as database migrations, form validations, and testing are streamlined. Ruby On Rails also has a large and active community which provides ample support and resources (often called gems), ensuring that developers can build robust, scalable applications efficiently. 

 

Database Operation Heavy Projects 

Ruby on Rails is highly effective for database-intensive applications. The framework’s Active Record ORM simplifies database interactions, allowing developers to write database queries using Ruby code rather than SQL. Rails' migrations system makes it easy to improve the database schema over time, ensuring compatibility and seamless updates. With built-in support for caching, eager loading, and other performance optimization techniques, Rails can handle substantial data loads efficiently. As with the last case, the extensive community support and libraries offer numerous tools for enhancing database performance and scalability. This makes Ruby on Rails a robust choice for applications with heavy database requirement 

 

Easy Full-Stack Stack Development 

Ruby on Rails also makes for an excellent choice for full stack development due to its comprehensive and cohesive framework. It integrates both front-end and back-end development, reducing development complexity. Rails' built-in MVC (Model-View-Controller) architecture ensures a clear separation of concerns, making code more maintainable and scalable. 

![Slide10](/src/assets/Presentation/Slides/Slide10.jpg)
There are many sites on the web that currently make use of Ruby on Rails in some capacity. In some cases, Rails was used to get the project off the ground, utilising Rails’ fast development time to get the project going quickly. One example of this would be Twitch TV, a popular streaming website that used Rails to build the backbone of its service before moving away from it in favour of “microservices.” 

Another example would be Hulu, an American content on demand streaming service. This site was also originally built using Rails, with the framework once again providing a quick way for Hulu to get their service running amidst competitors like Netflix, Amazon Prime streaming and many others. Again, Hulu overhauled their web services and moved away from Rails in favour of a more compartmentalized “microservices” structure. 

There are also several well-known websites that use Ruby on Rails and have stuck with it. Etsy, a small online store hub where people can make and sell goods safely founded in 2005, has made use of Rails since its inception and has not moved away from it as the main backbone of the site. 

GitHub, which we are all familiar with, has also followed a similar path. The site was created for hosting code repositories, and once again used Rails as the main framework for its development, and still uses it today. 

Other examples include Code Academy, Good Reads and Kickstarter. 

![Slide11](/src/assets/Presentation/Slides/Slide11.jpg)

Ruby on Rails, like any development framework, has things that it does better and worse than other frameworks.  

Rais’ pros include it’s simple, readable language which makes designing and reading code for project easy, even for developers new to the project. This provides an advantage when bringing on new developers, as they may take less time for them to understand the code base. 

Ruby on Rails is, as we mentioned, a full-stack development framework, meaning it provides all the tools a developer needs to get a project up and running. Everything from the design and look of the page to the way data is parsed and handled in the background is done within the Rails framework, which greatly simplifies the process for the developer. 

Rails’ encouragement of RESTful principles and rigidity when compared to other frameworks also provides an advantage to developers, enabling speedy development of their project. 

And another thing that Rails does well is making Databases simple and easy to work with. Rails, according to their doctrine, places the happiness of the developer first, and simplifying working with databases is a great way to do that. This is facilitated by the ORM style database handling, which incorporates object-oriented programming concepts like inheritance, persistence, and data mapping (think Int, String, float etc.) which makes working with databases easier for programmers. 

![Slide12](/src/assets/Presentation/Slides/Slide12.jpg)

![Slide13](/src/assets/Presentation/Slides/Slide13.jpg)

