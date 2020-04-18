<template>
    <div id="app">
        <div class="wrapper">
            <div id="header">
                <div class="container">
                    <div class="main-logo">
                        <router-link to="/">
                            <!--<strong>#localgutschein</strong>ing-->

                            <img src="localgutscheining_logo_white.svg" alt="#localgutscheing" />
                        </router-link>
                    </div>

                    <div>
                        <a href="https://www.jena-digital.de/jenavsvirus/">
                            <img src="jenavsvirus.png" alt="JenaVsVirus" />
                        </a>
                    </div>

                    <div>
                        Powered by
                        <a href="http://www.wunschloesung.com">
                            <img src="wunschloesung.png" alt="Wunschlösung"/>
                        </a>
                    </div>
                </div>
            </div>

            <!--
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/stores">Stores</router-link> |
                <router-link to="/about">Über uns</router-link>
            </div>
            -->

            <div id="content">
                <router-view/>
            </div>
        </div>

        <footer>
            <p>
                <strong>#localgutschein</strong>ing ist ein ehrenamtliches Projekt im Rahmen des Hackathons “Jena vs. Virus Camp” in Kooperation mit
                <a href="http://www.wunschloesung.com">
                    <img style="display: inline-block; height: 25px" src="wunschloesung.png" alt="Wunschlösung"/>
                </a>.
            </p>

            <router-link to="/imprint">Impressum</router-link>&nbsp;
            <router-link to="/dataProtection">Datenschutz</router-link>
        </footer>
    </div>
</template>

<style lang="scss">

html, body {
    height: 100%;
    margin: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
}

$footerHeight: 60px;

.wrapper {
    min-height: 100%;
    padding-bottom: $footerHeight;
}

$wlBlue: rgb(0, 185, 255);

#header {
    background-color: $wlBlue;
    color: white;
    padding: 10px;

    > * {
        display: flex;
        justify-content: space-between;
    }

    > * {
        img {
            height: 60px;
        }
    }
}

footer {
    height: $footerHeight;
    margin-top: -$footerHeight + 20px;

    color: white;
    background-color: rgb(102, 102, 102);

    a {
        color: rgb(204, 204, 204) !important;
    }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.main-logo {
    a {
        color: white !important;
        font-size: 30px;
        line-height: 60px;
        vertical-align: center;

        &:hover {
            text-decoration: none !important;
        }
    }
}
</style>
