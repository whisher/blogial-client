'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">blogial-client documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                            <a href="todo.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>TODO
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AdminDashboardModule.html" data-type="entity-link">AdminDashboardModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/AdminDashboardRoutingModule.html" data-type="entity-link">AdminDashboardRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/AdminLayoutModule.html" data-type="entity-link">AdminLayoutModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/AdminMediaModule.html" data-type="entity-link">AdminMediaModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/AdminMediaRoutingModule.html" data-type="entity-link">AdminMediaRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/AdminModule.html" data-type="entity-link">AdminModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/AdminPostsModule.html" data-type="entity-link">AdminPostsModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/AdminPostsRoutingModule.html" data-type="entity-link">AdminPostsRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/AdminRoutingModule.html" data-type="entity-link">AdminRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/AdminUsersModule.html" data-type="entity-link">AdminUsersModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/AdminUsersRoutingModule.html" data-type="entity-link">AdminUsersRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-1ff743fa11ba12a174d935e48cd5b8ff"' : 'data-target="#xs-components-links-module-AppModule-1ff743fa11ba12a174d935e48cd5b8ff"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-1ff743fa11ba12a174d935e48cd5b8ff"' : 'id="xs-components-links-module-AppModule-1ff743fa11ba12a174d935e48cd5b8ff"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/AppServerModule.html" data-type="entity-link">AppServerModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppServerModule-8296ccff982fddad6b9c3e4fe647b26d"' : 'data-target="#xs-components-links-module-AppServerModule-8296ccff982fddad6b9c3e4fe647b26d"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppServerModule-8296ccff982fddad6b9c3e4fe647b26d"' : 'id="xs-components-links-module-AppServerModule-8296ccff982fddad6b9c3e4fe647b26d"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AuthenticationLayoutModule.html" data-type="entity-link">AuthenticationLayoutModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/AuthenticationModule.html" data-type="entity-link">AuthenticationModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/AuthenticationRoutingModule.html" data-type="entity-link">AuthenticationRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/BlogAboutModule.html" data-type="entity-link">BlogAboutModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/BlogAboutRoutingModule.html" data-type="entity-link">BlogAboutRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/BlogContactModule.html" data-type="entity-link">BlogContactModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/BlogContactRoutingModule.html" data-type="entity-link">BlogContactRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/BlogHomeModule.html" data-type="entity-link">BlogHomeModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/BlogHomeRoutingModule.html" data-type="entity-link">BlogHomeRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/BlogLayoutModule.html" data-type="entity-link">BlogLayoutModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/BlogModule.html" data-type="entity-link">BlogModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/BlogPostModule.html" data-type="entity-link">BlogPostModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/BlogPostRoutingModule.html" data-type="entity-link">BlogPostRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/BlogRoutingModule.html" data-type="entity-link">BlogRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/CoreAuthenticationModule.html" data-type="entity-link">CoreAuthenticationModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/CorePostsdModule.html" data-type="entity-link">CorePostsdModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/CoreUsersModule.html" data-type="entity-link">CoreUsersModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/IconsModule.html" data-type="entity-link">IconsModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/UiButtonSpinnerModule.html" data-type="entity-link">UiButtonSpinnerModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-UiButtonSpinnerModule-0dd256c8239a846c6a5787fb08f05573"' : 'data-target="#xs-components-links-module-UiButtonSpinnerModule-0dd256c8239a846c6a5787fb08f05573"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-UiButtonSpinnerModule-0dd256c8239a846c6a5787fb08f05573"' : 'id="xs-components-links-module-UiButtonSpinnerModule-0dd256c8239a846c6a5787fb08f05573"' }>
                                        <li class="link">
                                            <a href="components/UiButtonSpinnerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UiButtonSpinnerComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/UiButtonsModule.html" data-type="entity-link">UiButtonsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-UiButtonsModule-6753c787e9c0a9720d43c1dbf001a537"' : 'data-target="#xs-components-links-module-UiButtonsModule-6753c787e9c0a9720d43c1dbf001a537"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-UiButtonsModule-6753c787e9c0a9720d43c1dbf001a537"' : 'id="xs-components-links-module-UiButtonsModule-6753c787e9c0a9720d43c1dbf001a537"' }>
                                        <li class="link">
                                            <a href="components/UiFabButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UiFabButtonComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/UiChipsModule.html" data-type="entity-link">UiChipsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-UiChipsModule-4bb201d8e67bb310254750926b498a3d"' : 'data-target="#xs-components-links-module-UiChipsModule-4bb201d8e67bb310254750926b498a3d"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-UiChipsModule-4bb201d8e67bb310254750926b498a3d"' : 'id="xs-components-links-module-UiChipsModule-4bb201d8e67bb310254750926b498a3d"' }>
                                        <li class="link">
                                            <a href="components/UiChipsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UiChipsComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/UiConfirmModule.html" data-type="entity-link">UiConfirmModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-UiConfirmModule-cde44395219d73597ebd384a8ec0a2ec"' : 'data-target="#xs-components-links-module-UiConfirmModule-cde44395219d73597ebd384a8ec0a2ec"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-UiConfirmModule-cde44395219d73597ebd384a8ec0a2ec"' : 'id="xs-components-links-module-UiConfirmModule-cde44395219d73597ebd384a8ec0a2ec"' }>
                                        <li class="link">
                                            <a href="components/UIConfirmComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UIConfirmComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-UiConfirmModule-cde44395219d73597ebd384a8ec0a2ec"' : 'data-target="#xs-injectables-links-module-UiConfirmModule-cde44395219d73597ebd384a8ec0a2ec"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-UiConfirmModule-cde44395219d73597ebd384a8ec0a2ec"' : 'id="xs-injectables-links-module-UiConfirmModule-cde44395219d73597ebd384a8ec0a2ec"' }>
                                        <li class="link">
                                            <a href="injectables/ConfirmService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ConfirmService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ConfirmState.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ConfirmState</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/UiLoaderModule.html" data-type="entity-link">UiLoaderModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-UiLoaderModule-7a8659529b028d2abcbc2a41846c1fb7"' : 'data-target="#xs-components-links-module-UiLoaderModule-7a8659529b028d2abcbc2a41846c1fb7"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-UiLoaderModule-7a8659529b028d2abcbc2a41846c1fb7"' : 'id="xs-components-links-module-UiLoaderModule-7a8659529b028d2abcbc2a41846c1fb7"' }>
                                        <li class="link">
                                            <a href="components/UiLoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UiLoaderComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/UiPasswordModule.html" data-type="entity-link">UiPasswordModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-UiPasswordModule-c3837ebea2fc1a805bae12f9d44d3c17"' : 'data-target="#xs-components-links-module-UiPasswordModule-c3837ebea2fc1a805bae12f9d44d3c17"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-UiPasswordModule-c3837ebea2fc1a805bae12f9d44d3c17"' : 'id="xs-components-links-module-UiPasswordModule-c3837ebea2fc1a805bae12f9d44d3c17"' }>
                                        <li class="link">
                                            <a href="components/UiPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UiPasswordComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/UiStickyHeaderModule.html" data-type="entity-link">UiStickyHeaderModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-UiStickyHeaderModule-381d32a925a5e7737292b41d3966ba91"' : 'data-target="#xs-components-links-module-UiStickyHeaderModule-381d32a925a5e7737292b41d3966ba91"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-UiStickyHeaderModule-381d32a925a5e7737292b41d3966ba91"' : 'id="xs-components-links-module-UiStickyHeaderModule-381d32a925a5e7737292b41d3966ba91"' }>
                                        <li class="link">
                                            <a href="components/UiStickyHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UiStickyHeaderComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/UiUtilitiesModule.html" data-type="entity-link">UiUtilitiesModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-UiUtilitiesModule-ac4563af532ec4f5cc79be1eb23c2ef3"' : 'data-target="#xs-directives-links-module-UiUtilitiesModule-ac4563af532ec4f5cc79be1eb23c2ef3"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-UiUtilitiesModule-ac4563af532ec4f5cc79be1eb23c2ef3"' : 'id="xs-directives-links-module-UiUtilitiesModule-ac4563af532ec4f5cc79be1eb23c2ef3"' }>
                                        <li class="link">
                                            <a href="directives/UiGoToTopDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UiGoToTopDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/UiHeaderScrollDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UiHeaderScrollDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/UiRoleDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UiRoleDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/UiSubscribeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UiSubscribeDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"' }>
                        <span class="icon ion-md-cog"></span>
                        <span>Components</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AdminDashboardMainComponent.html" data-type="entity-link">AdminDashboardMainComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminDashboardWelcomeComponent.html" data-type="entity-link">AdminDashboardWelcomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminLayoutBarComponent.html" data-type="entity-link">AdminLayoutBarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminLayoutBrandComponent.html" data-type="entity-link">AdminLayoutBrandComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminLayoutFooterComponent.html" data-type="entity-link">AdminLayoutFooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminLayoutHeaderComponent.html" data-type="entity-link">AdminLayoutHeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminLayoutMainComponent.html" data-type="entity-link">AdminLayoutMainComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminLayoutMastheadComponent.html" data-type="entity-link">AdminLayoutMastheadComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminLayoutNavComponent.html" data-type="entity-link">AdminLayoutNavComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminMediaMainComponent.html" data-type="entity-link">AdminMediaMainComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminPostsMainComponent.html" data-type="entity-link">AdminPostsMainComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminPostsPostBoxComponent.html" data-type="entity-link">AdminPostsPostBoxComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminPostsPostContenteditableComponent.html" data-type="entity-link">AdminPostsPostContenteditableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminPostsPostDeleteComponent.html" data-type="entity-link">AdminPostsPostDeleteComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminPostsPostFormComponent.html" data-type="entity-link">AdminPostsPostFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminPostsPostGalleryComponent.html" data-type="entity-link">AdminPostsPostGalleryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminPostsPostItemComponent.html" data-type="entity-link">AdminPostsPostItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminPostsPostListComponent.html" data-type="entity-link">AdminPostsPostListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminPostsPostPageComponent.html" data-type="entity-link">AdminPostsPostPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminUsersMainComponent.html" data-type="entity-link">AdminUsersMainComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminUsersUserDeleteComponent.html" data-type="entity-link">AdminUsersUserDeleteComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminUsersUserFormComponent.html" data-type="entity-link">AdminUsersUserFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminUsersUserItemComponent.html" data-type="entity-link">AdminUsersUserItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminUsersUserListComponent.html" data-type="entity-link">AdminUsersUserListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminUsersUserPageComponent.html" data-type="entity-link">AdminUsersUserPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AuthenticationLayoutFooterComponent.html" data-type="entity-link">AuthenticationLayoutFooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AuthenticationLayoutHeaderComponent.html" data-type="entity-link">AuthenticationLayoutHeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AuthenticationLayoutMainComponent.html" data-type="entity-link">AuthenticationLayoutMainComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AuthenticationLoginFormComponent.html" data-type="entity-link">AuthenticationLoginFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AuthenticationLoginPageComponent.html" data-type="entity-link">AuthenticationLoginPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AuthenticationLogoutComponent.html" data-type="entity-link">AuthenticationLogoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BlogAboutMainComponent.html" data-type="entity-link">BlogAboutMainComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BlogContactMainComponent.html" data-type="entity-link">BlogContactMainComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BlogHomeGoToTopComponent.html" data-type="entity-link">BlogHomeGoToTopComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BlogHomeMainComponent.html" data-type="entity-link">BlogHomeMainComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BlogHomePostItemComponent.html" data-type="entity-link">BlogHomePostItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BlogHomePostListComponent.html" data-type="entity-link">BlogHomePostListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BlogLayoutBrandComponent.html" data-type="entity-link">BlogLayoutBrandComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BlogLayoutFooterComponent.html" data-type="entity-link">BlogLayoutFooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BlogLayoutHeaderComponent.html" data-type="entity-link">BlogLayoutHeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BlogLayoutMainComponent.html" data-type="entity-link">BlogLayoutMainComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BlogLayoutMastheadComponent.html" data-type="entity-link">BlogLayoutMastheadComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BlogLayoutNavComponent.html" data-type="entity-link">BlogLayoutNavComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BlogPostItemComponent.html" data-type="entity-link">BlogPostItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BlogPostMainComponent.html" data-type="entity-link">BlogPostMainComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconAngleDownComponent.html" data-type="entity-link">IconAngleDownComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconAngleUpComponent.html" data-type="entity-link">IconAngleUpComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconArrowLeftComponent.html" data-type="entity-link">IconArrowLeftComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconBellComponent.html" data-type="entity-link">IconBellComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconEditComponent.html" data-type="entity-link">IconEditComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconEnvelopeComponent.html" data-type="entity-link">IconEnvelopeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconEyeComponent.html" data-type="entity-link">IconEyeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconEyeSlashComponent.html" data-type="entity-link">IconEyeSlashComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconFacebookComponent.html" data-type="entity-link">IconFacebookComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconFileUploadComponent.html" data-type="entity-link">IconFileUploadComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconGooglePlusComponent.html" data-type="entity-link">IconGooglePlusComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconHomeComponent.html" data-type="entity-link">IconHomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconImageComponent.html" data-type="entity-link">IconImageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconImagesComponent.html" data-type="entity-link">IconImagesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconKeyComponent.html" data-type="entity-link">IconKeyComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconMinusComponent.html" data-type="entity-link">IconMinusComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconPlusComponent.html" data-type="entity-link">IconPlusComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconSearchComponent.html" data-type="entity-link">IconSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconTableComponent.html" data-type="entity-link">IconTableComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconThListComponent.html" data-type="entity-link">IconThListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconTrashComponent.html" data-type="entity-link">IconTrashComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IconTwitterComponent.html" data-type="entity-link">IconTwitterComponent</a>
                            </li>
                    </ul>
                </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#directives-links"' : 'data-target="#xs-directives-links"' }>
                        <span class="icon ion-md-code-working"></span>
                        <span>Directives</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                            <li class="link">
                                <a href="directives/AdminPostGalleryDirective.html" data-type="entity-link">AdminPostGalleryDirective</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/AccountFailure.html" data-type="entity-link">AccountFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/AccountNoop.html" data-type="entity-link">AccountNoop</a>
                    </li>
                    <li class="link">
                        <a href="classes/AccountRequested.html" data-type="entity-link">AccountRequested</a>
                    </li>
                    <li class="link">
                        <a href="classes/AccountSuccess.html" data-type="entity-link">AccountSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/AccountUpdate.html" data-type="entity-link">AccountUpdate</a>
                    </li>
                    <li class="link">
                        <a href="classes/AddPost.html" data-type="entity-link">AddPost</a>
                    </li>
                    <li class="link">
                        <a href="classes/AddPostFail.html" data-type="entity-link">AddPostFail</a>
                    </li>
                    <li class="link">
                        <a href="classes/AddPostSuccess.html" data-type="entity-link">AddPostSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/AddUser.html" data-type="entity-link">AddUser</a>
                    </li>
                    <li class="link">
                        <a href="classes/AddUserFail.html" data-type="entity-link">AddUserFail</a>
                    </li>
                    <li class="link">
                        <a href="classes/AddUserSuccess.html" data-type="entity-link">AddUserSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/AppPreloadingStrategy.html" data-type="entity-link">AppPreloadingStrategy</a>
                    </li>
                    <li class="link">
                        <a href="classes/Back.html" data-type="entity-link">Back</a>
                    </li>
                    <li class="link">
                        <a href="classes/BrowserWindowRef.html" data-type="entity-link">BrowserWindowRef</a>
                    </li>
                    <li class="link">
                        <a href="classes/CustomRouterStateSerializer.html" data-type="entity-link">CustomRouterStateSerializer</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeletePost.html" data-type="entity-link">DeletePost</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeletePostFail.html" data-type="entity-link">DeletePostFail</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeletePostSuccess.html" data-type="entity-link">DeletePostSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteUser.html" data-type="entity-link">DeleteUser</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteUserFail.html" data-type="entity-link">DeleteUserFail</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteUserSuccess.html" data-type="entity-link">DeleteUserSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/FilterPostsByStatus.html" data-type="entity-link">FilterPostsByStatus</a>
                    </li>
                    <li class="link">
                        <a href="classes/FilterPostsByTitle.html" data-type="entity-link">FilterPostsByTitle</a>
                    </li>
                    <li class="link">
                        <a href="classes/FilterUsersByName.html" data-type="entity-link">FilterUsersByName</a>
                    </li>
                    <li class="link">
                        <a href="classes/FilterUsersByRole.html" data-type="entity-link">FilterUsersByRole</a>
                    </li>
                    <li class="link">
                        <a href="classes/Forward.html" data-type="entity-link">Forward</a>
                    </li>
                    <li class="link">
                        <a href="classes/Go.html" data-type="entity-link">Go</a>
                    </li>
                    <li class="link">
                        <a href="classes/HttpErrorHandler.html" data-type="entity-link">HttpErrorHandler</a>
                    </li>
                    <li class="link">
                        <a href="classes/LoadPosts.html" data-type="entity-link">LoadPosts</a>
                    </li>
                    <li class="link">
                        <a href="classes/LoadPostsFail.html" data-type="entity-link">LoadPostsFail</a>
                    </li>
                    <li class="link">
                        <a href="classes/LoadPostsSuccess.html" data-type="entity-link">LoadPostsSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/LoadUsers.html" data-type="entity-link">LoadUsers</a>
                    </li>
                    <li class="link">
                        <a href="classes/LoadUsersFail.html" data-type="entity-link">LoadUsersFail</a>
                    </li>
                    <li class="link">
                        <a href="classes/LoadUsersSuccess.html" data-type="entity-link">LoadUsersSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/Login.html" data-type="entity-link">Login</a>
                    </li>
                    <li class="link">
                        <a href="classes/LoginFailure.html" data-type="entity-link">LoginFailure</a>
                    </li>
                    <li class="link">
                        <a href="classes/LoginJustLogged.html" data-type="entity-link">LoginJustLogged</a>
                    </li>
                    <li class="link">
                        <a href="classes/LoginRedirect.html" data-type="entity-link">LoginRedirect</a>
                    </li>
                    <li class="link">
                        <a href="classes/LoginSuccess.html" data-type="entity-link">LoginSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/Logout.html" data-type="entity-link">Logout</a>
                    </li>
                    <li class="link">
                        <a href="classes/NotificationPost.html" data-type="entity-link">NotificationPost</a>
                    </li>
                    <li class="link">
                        <a href="classes/NotificationPostFail.html" data-type="entity-link">NotificationPostFail</a>
                    </li>
                    <li class="link">
                        <a href="classes/NotificationPostSuccess.html" data-type="entity-link">NotificationPostSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/SubscribeContext.html" data-type="entity-link">SubscribeContext</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdatePost.html" data-type="entity-link">UpdatePost</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdatePostFail.html" data-type="entity-link">UpdatePostFail</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdatePostSuccess.html" data-type="entity-link">UpdatePostSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateUser.html" data-type="entity-link">UpdateUser</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateUserFail.html" data-type="entity-link">UpdateUserFail</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateUserSuccess.html" data-type="entity-link">UpdateUserSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/WindowRef.html" data-type="entity-link">WindowRef</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/AuthenticationEffects.html" data-type="entity-link">AuthenticationEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/AuthenticationService.html" data-type="entity-link">AuthenticationService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ConfirmService.html" data-type="entity-link">ConfirmService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ConfirmState.html" data-type="entity-link">ConfirmState</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PlatformService.html" data-type="entity-link">PlatformService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PostsEffects.html" data-type="entity-link">PostsEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PostsService.html" data-type="entity-link">PostsService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PwaInstallService.html" data-type="entity-link">PwaInstallService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PwaNotificationService.html" data-type="entity-link">PwaNotificationService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RouterEffects.html" data-type="entity-link">RouterEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/UsersEffects.html" data-type="entity-link">UsersEffects</a>
                            </li>
                            <li class="link">
                                <a href="injectables/UsersService.html" data-type="entity-link">UsersService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#interceptors-links"' : 'data-target="#xs-interceptors-links"' }>
                <span class="icon ion-ios-swap"></span>
                <span>Interceptors</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                    <li class="link">
                        <a href="interceptors/AuthenticationErrorInterceptor.html" data-type="entity-link">AuthenticationErrorInterceptor</a>
                    </li>
                    <li class="link">
                        <a href="interceptors/AuthenticationInterceptor.html" data-type="entity-link">AuthenticationInterceptor</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                 ${ isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"' }>
            <span class="icon ion-ios-lock"></span>
            <span>Guards</span>
            <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
                ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                <li class="link">
                    <a href="guards/AccountGuard.html" data-type="entity-link">AccountGuard</a>
                </li>
                <li class="link">
                    <a href="guards/AuthenticationGuard.html" data-type="entity-link">AuthenticationGuard</a>
                </li>
                <li class="link">
                    <a href="guards/IsPristineGuard.html" data-type="entity-link">IsPristineGuard</a>
                </li>
                <li class="link">
                    <a href="guards/LoginGuard.html" data-type="entity-link">LoginGuard</a>
                </li>
                <li class="link">
                    <a href="guards/PostsGuard.html" data-type="entity-link">PostsGuard</a>
                </li>
                <li class="link">
                    <a href="guards/RoleGuard.html" data-type="entity-link">RoleGuard</a>
                </li>
                <li class="link">
                    <a href="guards/UsersGuard.html" data-type="entity-link">UsersGuard</a>
                </li>
            </ul>
            </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/Account.html" data-type="entity-link">Account</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Authenticate.html" data-type="entity-link">Authenticate</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AuthenticationState.html" data-type="entity-link">AuthenticationState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AuthenticationToken.html" data-type="entity-link">AuthenticationToken</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ConfigUrls.html" data-type="entity-link">ConfigUrls</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ConfirmOptions.html" data-type="entity-link">ConfirmOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Image.html" data-type="entity-link">Image</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IsPristineAware.html" data-type="entity-link">IsPristineAware</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Post.html" data-type="entity-link">Post</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RouterStateUrl.html" data-type="entity-link">RouterStateUrl</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/State.html" data-type="entity-link">State</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/State-1.html" data-type="entity-link">State</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/State-2.html" data-type="entity-link">State</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/State-3.html" data-type="entity-link">State</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/State-4.html" data-type="entity-link">State</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/State-5.html" data-type="entity-link">State</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/State-6.html" data-type="entity-link">State</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/State-7.html" data-type="entity-link">State</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/State-8.html" data-type="entity-link">State</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Thumb.html" data-type="entity-link">Thumb</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/User.html" data-type="entity-link">User</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
