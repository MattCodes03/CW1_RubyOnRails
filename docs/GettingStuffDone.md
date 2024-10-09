# Getting Stuff Done with Ruby on Rails

1. [Introduction](#introduction)
   1.1 [Prerequisites](#prerequisites)
      1.1.1 [Installing Rails](#installingrails)
2. [Welcome to Rails](#hellorails)
   2.1. [Creating a Rails App](#createapp)
   2.2. [Web Server](#webserver)
   2.3. [Setting your own Home Page](#settingindex)
3. [Model-View-Controller](#mvc)

## Introduction <a name="introduction"></a>

This tutorial is designed to give you a general overview of how Ruby on Rails works and what kind of stuff you can build with it. This guide will walk you through setting up user authentication and a basic To-Do list web app.

## Prerequisites <a name="prerequisites"></a>

Before you can get started with rails, there are a couple of things you need to have installed first. These include:
- Ruby
- SQLite3

### Installing Ruby
#### Linux/Unix
- **Ubuntu/Debian**
`sudo apt install ruby`

- **Arch**
`sudo pacman -S ruby`

#### Windows
Visit [RubyInstaller downloads page](https://rubyinstaller.org/) and download the latest version (choose the version that suits your architecture, usually the 64-bit version).

### Installing SQLite3
#### Linux/Unix
- **Ubuntu/Debian**
`sudo apt install sqlite`

- **Arch**
`sudo pacman -S sqlite`

#### Windows
Visit [SQLite downloads page](https://www.sqlite.org/download.html) and download the latest version usually located in the **Precompiled Binaries for Windows** section.

Once you have downloaded the ZIP file, extract the contents to a destination of your choice. Then add that destination folder to your PATH.

To test install, run the following command:
```bash
$ sqlite3 --version
```

## Installing Rails <a name="installingrails"></a>
Installing rails is very simple. Use the `gem install` command provided by RubyGems:
```bash
$ gem install rails
```

> **NOTE:** If you encounter any errors when attempting to install rails you may need to run the following commands before installing rails:
```bash
$ gem install erb
```

## Welcome to Rails <a name="hellorails"></a>
### Creating a Rails App <a name="createapp"></a>
Rails comes with a number of generator scripts that can be used to speed up your development. One of these is the app genereator which is used when starting a new Rails project.

Run the following:
```bash
$ rails new ToDoApp
```
If successful this command will create a new `ToDoApp` directory where we will be working for the remainder of this tutorial.

### Web Server <a name="webserver"></a>
Once you have created your project, there is already some starter code. To view this we need to start the web server.

You can do this by running the following within the `ToDoApp` directory:<br>
> **NOTE:** If using **Windows** you will have to pass scripts directly to the **ruby** interpreter e.g. `ruby bin\rails server`

```bash
$ bin/rails server
```

This will start up Puma, a web server distributed with Rails by default. To see your application open a browser window and navigate to http://localhost:3000. You should now see the default Ruby on Rails landing page.

### Setting your own Home Page <a name="settingindex"></a>
To get rid of the default page and start displaying your own information, you need to create a *route*. Rails applications at minimum will always have a *route*, a controller with an *action*, and a *view*. The *route* will route to a *controller action*. This is where the work is done to handle the request, and prepare any data for the *view*. The *view* acts as a template to display any data in a desired format.

> **NOTE:** Routes are rules written in a Ruby DSL (Domain-Specific Language). Controllers are Ruby classes, and their public methods are actions. And views are templates, usually written in a mixture of HTML and Ruby. *([*Getting Started with Rails*](https://guides.rubyonrails.org/getting_started.html#creating-a-new-rails-project-installing-rails))*

To start you need to open the routes file, located at `config/routes.rb`. You should see a `Rails.application.routes.draw` block, you can remove all placeholder code within this and replace it with the following:

```ruby
Rails.application.routes.draw do
  root "todo#index"
end
```
This will set the root route to the `index` action found in the `TodoController`

To generate this controller we must first make use of the controller generator.

```bash
bin/rails generate controller Todo index --skip-routes
```

You should no be able to see the Todo controller, located at `app/controllers/todo_controller.rb`

## Model-View-Controller <a name="#mvc"></a>
