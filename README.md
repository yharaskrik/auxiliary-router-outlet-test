This repo has two apps

`client` which is working as expected can navigate to `/manager/edit` click Go to Secondary and then reload.
Page loads correctly and routes are loaded right

`client-not-working` is not working, the same routes are setup just nested one level deeper inside a container component
(`manager-container`). This one you can load `/manager/edit` and nav to secondary but on reload it throws an error about the 
outlet already being activated. 

I think this may be a bug in the router but am not sure.
