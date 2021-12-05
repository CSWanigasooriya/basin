package com.flaze.basin

import android.os.Bundle
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Menu
import androidx.compose.runtime.Composable
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.flaze.basin.ui.theme.BasinTheme
import com.google.firebase.ktx.Firebase
import com.google.firebase.remoteconfig.FirebaseRemoteConfig
import com.google.firebase.remoteconfig.ktx.get
import com.google.firebase.remoteconfig.ktx.remoteConfig
import com.google.firebase.remoteconfig.ktx.remoteConfigSettings
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.launch

class MainActivity : ComponentActivity() {

  private lateinit var remoteConfig: FirebaseRemoteConfig


  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    // Get Remote Config instance.
    remoteConfig = Firebase.remoteConfig


    // Create a Remote Config Setting to enable developer mode, which you can use to increase
    // the number of fetches available per hour during development. Also use Remote Config
    // Setting to set the minimum fetch interval.
    val configSettings = remoteConfigSettings {
      minimumFetchIntervalInSeconds = 1800
    }
    remoteConfig.setConfigSettingsAsync(configSettings)

    // Set default Remote Config parameter values. An app uses the in-app default values, and
    // when you need to adjust those defaults, you set an updated value for only the values you
    // want to change in the Firebase console. See Best Practices in the README for more
    // information.
    remoteConfig.setDefaultsAsync(R.xml.remote_config_defaults)


    setContent {
      BasinTheme {
        // A surface container using the 'background' color from the theme
        Surface(color = MaterialTheme.colors.background) {
          MainLayout()
        }
      }
    }

    fetchWelcome()
  }

  /**
   * Fetch a welcome message from the Remote Config service, and then activate it.
   */
  private fun fetchWelcome() {
    remoteConfig.fetchAndActivate()
      .addOnCompleteListener(this) { task ->
        if (task.isSuccessful) {
          val updated = task.result
          Toast.makeText(
            this, "Updated: $updated",
            Toast.LENGTH_SHORT
          ).show()
        } else {
          Toast.makeText(
            this, "Fetch failed",
            Toast.LENGTH_SHORT
          ).show()
        }
        displayWelcomeMessage()
      }
  }

  /**
   * display a welcome message as fetched from welcome_message.
   */
  private fun displayWelcomeMessage() {
    val welcomeMessage = remoteConfig[WELCOME_MESSAGE_KEY].asString()
    Toast.makeText(this, welcomeMessage, Toast.LENGTH_LONG).show()
  }

  companion object {

    private const val TAG = "MainActivity"

    // Remote Config keys
    private const val WELCOME_MESSAGE_KEY = "welcome_message"
  }
}


@Composable
fun TopBar(scope: CoroutineScope, scaffoldState: ScaffoldState) {
  TopAppBar(
    title = { Text(text = stringResource(R.string.app_name), fontSize = 18.sp) },
    navigationIcon = {
      IconButton(onClick = {
        scope.launch {
          scaffoldState.drawerState.open()
        }
      }) {
        Icon(Icons.Filled.Menu, "")
      }
    },
    backgroundColor = MaterialTheme.colors.primary,
    contentColor = Color.White
  )
}

@Composable
fun Navigation(navController: NavHostController) {
  NavHost(navController, startDestination = NavDrawerItem.Home.route) {
    composable(NavDrawerItem.Home.route) {
      HomeScreen()
    }
    composable(NavDrawerItem.Music.route) {
      MusicScreen()
    }
    composable(NavDrawerItem.Movies.route) {
      MoviesScreen()
    }
    composable(NavDrawerItem.Books.route) {
      BooksScreen()
    }
    composable(NavDrawerItem.Profile.route) {
      ProfileScreen()
    }
    composable(NavDrawerItem.Settings.route) {
      SettingsScreen()
    }
  }
}

@Composable
fun MainLayout() {
  val scaffoldState = rememberScaffoldState(rememberDrawerState(DrawerValue.Closed))
  val scope = rememberCoroutineScope()
  val navController = rememberNavController()
  // If you want the drawer from the right side, uncomment the following
  // CompositionLocalProvider(LocalLayoutDirection provides LayoutDirection.Rtl) {
  Scaffold(
    scaffoldState = scaffoldState,
    topBar = { TopBar(scope = scope, scaffoldState = scaffoldState) },
    drawerContent = {
    },
  ) {
    Navigation(navController = navController)
  }
}

@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
  BasinTheme {
    MainLayout()
  }
}
