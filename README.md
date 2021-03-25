This repo has two apps

`client` which is working as expected can navigate to `/manager/edit` click Go to Secondary and then reload.
Page loads correctly and routes are loaded right

`client-not-working` is not working, the same routes are setup just nested one level deeper inside a container component
(`manager-container`). This one you can load `/manager/edit` and nav to secondary but on reload it throws an error about the 
outlet already being activated. 

`Error: Cannot activate an already activated outlet`. All of the SO posts and Angular issues (all of which have been solved) I was able to find talk about this being a lazy
loading issue or caused by some other problem or error in the console

I think this may be a bug in the router but am not sure. 

I would assume that secondary outlets can be defined at any level in the routing 
tree as long as there is a router-outlet with the outlet name.

Named outlets seem very finicky because in another project I was able to essentially do this (with loadChildren unwrapped)

```
[
{path: '', children: [
  {
    path: '',
    children: [
      ...sharedSidebarRoutes, <-- an array of routes with "outlet": "sidebar"
      {
        path: 'edit',
        component: EditComponent
      }
    ]
  }
]}
]
```

which "mostly" works but if you try and nest another route into a sub route say 
`/edit/page` then `/edit/page(sidebar:route1)` does not work but `/edit(sidebar:route1)` does
