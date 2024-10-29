# Getting Stuff Done with Ruby on Rails

1. [Introduction](/tutorial)
   1.1 [Prerequisites]()
      1.1.1 [Installing Rails]()
2. [Welcome to Rails](#hellorails)
   2.1. [Creating a Rails App](#createapp)
   2.2. [Web Server](#webserver)
   2.3. [Setting your own Home Page](#settingindex)
3. [Model-View-Controller](#mvc)
   3.1 [Creating the Model](#createmodel)
   3.2 [Adding more actions](#addingactions)
   3.3 [Creating your own Views](#createview)
 

## Introduction

This tutorial is designed to give you a general overview of how Ruby on Rails works and what kind of stuff you can build with it. This guide will walk you through setting up a basic To-Do list web app making use of CRUD operations and a wide variety of the available Rails functionailty.

## Prerequisites

Before you can get started with rails, there are a couple of things you need to have installed first. These include:
- Ruby
- SQLite3

### Installing Ruby
#### Linux/Unix
- **Ubuntu/Debian**
```bash
$ sudo apt install ruby
```

- **Arch**
```bash
$ sudo pacman -S ruby
```

#### Windows
Visit [RubyInstaller downloads page](https://rubyinstaller.org/) and download the latest version (choose the version that suits your architecture, usually the 64-bit version).

### Installing SQLite3
#### Linux/Unix
- **Ubuntu/Debian**
```bash 
$ sudo apt install sqlite 
```

- **Arch**
```bash
$ sudo pacman -S sqlite
```

#### Windows
Visit [SQLite downloads page](https://www.sqlite.org/download.html) and download the latest version usually located in the **Precompiled Binaries for Windows** section.

Once you have downloaded the ZIP file, extract the contents to a destination of your choice. Then add that destination folder to your PATH.

To test install, run the following command:
```bash
$ sqlite3 --version
```

## Installing Rails
Installing rails is very simple. Use the `gem install` command provided by RubyGems:
```bash
$ gem install rails
```

> **NOTE:** If you encounter any errors when attempting to install rails you may need to run the following commands before installing rails:
```bash
$ gem install erb
```

## Welcome to Rails
### Creating a Rails App
Rails comes with a number of generator scripts that can be used to speed up your development. One of these is the app genereator which is used when starting a new Rails project.

Run the following:
```bash
$ rails new ToDoApp
```
If successful this command will create a new `ToDoApp` directory where we will be working for the remainder of this tutorial.

### Web Server
Once you have created your project, there is already some starter code. To view this we need to start the web server.

You can do this by running the following within the `ToDoApp` directory:<br>
> **NOTE:** If using **Windows** you will have to pass scripts directly to the **ruby** interpreter e.g. `ruby bin\rails server`

```bash
$ bin/rails server
```

This will start up Puma, a web server distributed with Rails by default. To see your application open a browser window and navigate to http://localhost:3000. You should now see the default Ruby on Rails landing page.

### Setting your own Home Page
To get rid of the default page and start displaying your own information, you need to create a *route*. Rails applications at minimum will always have a *route*, a controller with an *action*, and a *view*. The *route* will route to a *controller action*. This is where the work is done to handle the request, and prepare any data for the *view*. The *view* acts as a template to display any data in a desired format.

> **NOTE:** Routes are rules written in a Ruby DSL (Domain-Specific Language). Controllers are Ruby classes, and their public methods are actions. And views are templates, usually written in a mixture of HTML and Ruby. *([Getting Started with Rails](https://guides.rubyonrails.org/getting_started.html#creating-a-new-rails-project-installing-rails))*

To start you need to open the routes file, located at `config/routes.rb`. You should see a `Rails.application.routes.draw` block, you can remove all placeholder code within this and replace it with the following:

```ruby
Rails.application.routes.draw do
  root "todo#index"
end
```
This will set the root route to the `index` action found in the `TodoController`

To generate this controller we must first make use of the controller generator.

```bash
$ bin/rails generate controller Todo index --skip-routes
```

You should no be able to see the Todo controller, located at `app/controllers/todo_controller.rb`

## Model-View-Controller
As explained during the presentation, Ruby on Rails makes use of the Model-View-Controller (MVC) design pattern. In summary this pattern splits the app up into three easy to maintain sections:
- Model - This is used to represent data.
- View - Responsible for displaying the data.
- Controller - Recieves, Processes and Provides the data.

### Creating the Model
#### Generating the Model
To create a model we use the model generator.
```bash
$ bin/rails generate model Task title:string description:text completed:boolean
```

If successful, this command will create a number of files within our `ToDoApp` directory. The two most important of these are:
- `db/migrate/<timestamp>_create_tasks.rb`
- `app/models/task.rb`

#### Migrations
*Migrations* are used to alter the structure of the apps database. These migrations are written in Ruby. The newely created *migration* should look something like this:

```ruby
class CreateTasks < ActiveRecord::Migration[7.2]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :description
      t.boolean :completed, default: false

      t.timestamps
    end
  end
end
```

In this block of code several things are going on so lets break it down.
- `create_table` - This as you would image specifies how the tasks table will be created. This function by default will add an auto-incrementing ID primary key.

- `title`, `description`, `completed` - These are the fields we defined when creating the model. If you need to add any other fields it is reccomended to create a new migration.

- `t.timestamps` - This is created automatically by Rails, this will create two additonal `created_at` and `updated_at` fields. These are managed by Rails whenever a model object is updated or created.

To finish of this section, we will run the migration with the following command, to ensure the `tasks` table is created in our database:

```bash
$ bin/rails db:migrate
```
### Adding more actions
Now we have a model in our database, we need to create some actions so we can interact and do things with that model.

As explained earlier, everything in your rails app will require a route, so lets create some within our `config/routes.rb` file.

```ruby
Rails.application.routes.draw do
  root "todo#index"

   # List all tasks and show a specific task
   get "/tasks", to: "todo#index"
   get "/tasks/new", to: "todo#new"  
   get "/tasks/:id", to: "todo#show", as: "task"
   get "/tasks/:id/edit", to: "todo#edit", as: "edit_task"
 
   # Routes for creating, updating, and deleting tasks
   post "/tasks", to: "todo#create"            # Create a new task
   patch "/tasks/:id", to: "todo#update"       # Update an existing task
   put "/tasks/:id", to: "todo#update"         # Alias for update
   delete "/tasks/:id", to: "todo#destroy"  
end
```

Okay! That is a lot of code so lets break it down:
- `get "/tasks", to: "todo#index"` - This is essentially the same as the `root` route, it just means if you visit http://localhost:3000/tasks you will see the index page.

- `get "/tasks/:id", to: "todo#show", as: "task"` - This means that if we visit `/tasks/1` we will see the task with ID 1. The extra `as: "task"` allows us to use a helper method when generating URL's within views. Using `task_path(1)` will generate `/tasks/1` (This will help later on).

- `get "/tasks/:id/edit", to: "todo#edit", as: "edit_task"` - This will allow us to access the edit page when attempting to edit tasks, this uses a helper method similar  ot the show route.

- `post "/tasks/new", to: "todo#new"` - This is used to instansiate a new Task object, on the `/new` page which will present the user with a form to fill in the Task objects data. However, this is not saved into the Database just yet.

- `post "/tasks", to: "todo#create"` - This allows us to create new tasks, in the form of submitting a POST request. This is when that new Task object will be added to the Database.

- `patch "/tasks/:id", to: "todo#update"` & `put "/tasks/:id", to: "todo#update"` - These are for updating a specific task. `patch` is typically for partial updates whereas `put` is for full on replacement.

- `delete "/tasks/:id", to: "todo#destroy"` - This is for deleting tasks, based on the task ID.

Now we have defined our routes, we need to create the actions within our controller, `app/controllers/todo_controller`:

```ruby
class TodoController < ApplicationController
  def index
    @tasks = Task.all # Fetch all Tasks
  end

  def show
    @task = Task.find(params[:id]) # Find the task by ID
  end
      render :new, status: :unprocessable_entity  # Re-render the new form on failure
    end
  end

  def new
    @task = Task.new # Create new Task Object
  end

  def create
    @task = Task.new(task_params) # Create new tasks based on provided parameters

    if @task.save # Save the task, redirect if successful.
      redirect_to root_path
    else
      render :new, status: :unprocessable_entity  # Re-render the new form on failure
    end
  end

```

- `index` - This is will fetch all tasks from the Database and store them in the `@tasks` variable, which we will use within our view.

- `show` - This will fetch a specific task, depending on the ID given in the URL.

- `new` - This will instansiate a Task object, that will allow us to populate with data collected from a form later on.

- `create` - This is where the Task Object we created is saved to the database, after the object has been populated with the data from `task_params`, which is defined in the next block of code.

```ruby
  def update
    @task = Task.find(params[:id]) # Find the task by ID

    if @task.update(task_params_update) # Update the task with the provided parameters
      redirect_to task_path(@task), notice: 'Task was successfully updated.' # Redirect on success
    else
      render :edit # Re-render the edit form on failure
    end
  end

   def destroy
    @task = Task.find(params[:id]) # Find the task by ID
  
    if @task.destroy # Attempt to destroy the found Task
      redirect_to root_path, notice: 'Task was successfully deleted.' # Redirect after deletion
    else
      redirect_to root_path, alert: 'Error deleting task.' # Redirect with an error message if deletion fails
    end
  end

private
def task_params
  params.require(:task).permit(:title, :description)
end
  def task_params_update
    params.require(:task).permit(:title, :description, :completed)
  end
end
```

- `update` - This will first find the task we are attempting to update by ID. Once found we can thewn update the task based on the parameters stored in `task_params`.

- `destroy` - This does exactly what you think it does. Finds the task by ID then deletes it from the database, then redirects you to the index page.

```erb
<h1>Tasks</h1>

<ul>
  <% @tasks.each do |t| %>
    <li>
      <a href="<%= task_path(t) %>">
        <%= t.title %>
      </a>
    </li>
  <% end %>
</ul>

<a href="/tasks/new">Add a new Task</a>
```

This code is a mix of HTML and ERB (Embedded Ruby). The HTML should be self explanatory but the ERB is where things get interesting. The `<% @tasks.each do |t| %>` specifys a loop where `t` is each individual task in the `@tasks` variable we defined in the controller earlier. You should also remeber when we specified our `task_path` value during the routes section, `<a href="<%= task_path(t) %>">` shows us why and how we use that path value. Before we continue try rebooting your Rails server (If you closed it down) and have a look at your new Index page, although the Task list should be empty and the New Task link will not work, yet!

We will now take a look at our `app/views/todo/new.html.erb` file, because we need to be able to create Tasks before we can view or update them.

```erb
<h1>New Task</h1>

<%= form_with model: @task do |form| %>
  <div>
    <%= form.label :title %><br>
    <%= form.text_field :title %>
  </div>

  <div>
    <%= form.label :description %><br>
    <%= form.text_area :description %>
  </div>

  <div>
    <%= form.submit %>
  </div>
<% end %>
```

This block of code makes use of a Form Builder. This allows us to quickly make a form with little code. If you now head back to your web application, you should be able to follow the New Task link and create a new Task. Although as we have yet to implement the `show` page, you will have to go back to the index page to make sure the task has been added. You should now see your new task now listed on the index page.

To complete the basic requirements for this To-Do list app we will allow the user to view the details of each task. Add the following to your `app/views/todo/show.html.erb` file:

```erb
<h1><%= @task.title %></h1>

<p><%= @task.description %></p>
<p>Completed: <%= @task.completed ? "Yes" : "No" %></p>
```

Finally! We have a basic To-Do list web app. Now there are a few final things to add, such as deleting and updating tasks but in its current state we have met the basic requirements. You should now be able to click on your tasks and see the full details, as well as create new tasks and confirm their creation without having to go back to the index page.

#### Deletion and Updates
Let's start by implementing the Delete Task functionailty. First add the following to your `app/views/todo/show.html.erb` file:

```erb
<%= form_with model: @task, method: :delete do %>
  <%= submit_tag 'Delete Task', data: { confirm: 'Are you sure?' } %>
<% end %>
```

This should now allow you to delete tasks. Give it a go!

Finally lets add some update functionailty. The first step is to add an extra action to our `app/controllers/todo_controller` file:

```ruby
  def edit
    @task = Task.find(params[:id]) # Find the task to edit
  end
```

Now we need a way to reach our edit form. Add the following to your `app/views/todo/show.html.erb` file:

```erb
<%= link_to 'Edit', edit_task_path(@task) %> |
```

This will allow us to load the edit task form with the correct task information as it wil provide us with the ID. Next create a new ERB file, `app/views/todo/edit.html.erb` and provide it with the following.

```erb
<h1>Edit Task</h1>

<%= form_with model: @task, url: task_path(@task), method: :patch do |form| %>
  <div>
    <%= form.label :title %><br>
    <%= form.text_field :title %>
  </div>

  <div>
    <%= form.label :description %><br>
    <%= form.text_area :description %>
  </div>

  <div>
    <%= form.label :completed %><br>
    <%= form.check_box :completed %>
  </div>

  <div>
    <%= form.submit "Update Task" %>
  </div>
<% end %>

```

And thats it! So long as you followed each instruction and nothing went horribly wrong, you now have a working ToDo list application built with Ruby on Rails. While our application doesn't look the prettiest you can have a go at adding your own styles if you'd like!
