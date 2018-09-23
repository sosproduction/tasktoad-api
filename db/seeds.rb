# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')

art_project = Project.create(
  title: "Art Project",
  description: "Work to do on art projects ",
  steps: "number of steps involved",
  source: "a source url"
)
art_project.tasks.create(description: "Finish up glazing technique studies")
art_project.tasks.create(description: "Buy pencils to finish The Visitor")
art_project.tasks.create(description: "Work on Yellow and Blue don't make Green book")
art_project.tasks.create(description: "Finish up Contemplation Giclees")
art_project.tasks.create(description: "Finish up Oil Painting")
art_project.tasks.create(description: "Work on Figure Study")

music_project = Project.create(
  title: "Work to do on music projects",
  description: "Different kinds of tasks related to music",
  steps: "number of steps involved",
  source: "a source url",
)
music_project.tasks.create(description: "Choose tracks for Thistle project")
music_project.tasks.create(description: "Practice guitar scales")
music_project.tasks.create(description: "Practice sweeping arpeggios")
music_project.tasks.create(description: "Prank call Marty Friedman and hang up")
music_project.tasks.create(description: "Compose second movement of symphony")
music_project.tasks.create(description: "Finish work on Piano Trio")
music_project.tasks.create(description: "Finish up third movement of String Quartet and Harpsichord")