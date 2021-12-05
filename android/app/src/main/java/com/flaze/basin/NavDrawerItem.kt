package com.flaze.basin

sealed class NavDrawerItem(var route: String, var icon: Int, var title: String) {
  object Home : NavDrawerItem("home", R.drawable.ic_home, "Home")
  object Music : NavDrawerItem("music", R.drawable.ic_home, "Music")
  object Movies : NavDrawerItem("movies", R.drawable.ic_home, "Movies")
  object Books : NavDrawerItem("books", R.drawable.ic_home, "Books")
  object Profile : NavDrawerItem("profile", R.drawable.ic_home, "Profile")
  object Settings : NavDrawerItem("settings", R.drawable.ic_home, "Settings")
}
