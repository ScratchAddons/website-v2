---
title: Higher project framerate mode
id: 60fps
---

**Higher project framerate mode** is an addon that allows customization of the project's run speed to be faster than the default of 30 FPS. This has the effect of making the project appear to run smoother and at a faster rate relative to the custom FPS value; therefore, the default value of 60 FPS will essentially make the project run twice as fast.

The feature can be quickly toggled on/off by holding `alt` and clicking the green flag. The flag will turn blue and a yellow fast-forward icon will appear over it, indicating that the project is running at a faster speed.

## Features

- The addon's functionality is only enabled whenever the user toggles it on by holding `alt` and clicking the green flag. The addon's functionality is toggled off every time the page is opened/refreshed.
- The addon works in both the project page and the editor.
- By default, the addon (when toggled on) sets the project's framerate to 60 FPS. This value can be changed in the addon's settings to an integer ranging from 31 to 240.
- To prevent abuse and cheating in cloud-based multiplayer games, the addon does not work whenever there are cloud variables in a shared project.

## Settings

### Custom FPS

Sets the value of the project's framerate when the addon is enabled.

## Future plans

- The addon might be marked as dangerous to curb projects that require this addon on the Scratch website. [Issue #6860](https://github.com/ScratchAddons/ScratchAddons/issues/6860)
- Because enabling the addon requires holding the `alt` key, it is not compatable with touchscreen devices. A proposed solution is to add a context menu to the green flag for this addon and several others. [Issue #7230](https://github.com/ScratchAddons/ScratchAddons/issues/7230)

## Credit

Jeffalo created the original addon that only set the project player to 60 FPS. TheColaber added the custom FPS setting and various other bug fixes. The accessible green flag indicator was created by JoanRiosiPla before being tweaked by WorldLanguages.

## Changelog

- **v1.1.0** The **60FPS Player Mode** addon was created.
- **v1.3.0** Addon is now enabled by default for all users, and was given the Recommended tag.
- **v1.7.0** Option added to customize the target FPS, which was locked to 60 before.
- **v1.11.0** Addon renamed to **Alt+GreenFlag 60FPS player mode**, and a brief information box was added. A limit was set on the custom FPS, which now ranges from 31 to 240.
- **v1.13.0** `Alt` + green flag click detection was improved. Addon can now be dynamically enabled and disabled.
- **v1.14.0** Addon was given the Project Player tag.
- **v1.18.0** Addon renamed to **60FPS project player mode**. Addon can now run in project embeds.
- **v1.24.0** Bug fix: Addon no longer loses track of state when changing from project page to editor.
- **v1.26.0** Bug fix: Addon no longer causes variables to not visually update in some cases.
- **v1.30.0** Addon is no longer enabled by default for all users.
- **v1.34.0** A more accessible yellow fast-forward icon was added to the green flag indicator whenever the addon is toggled on. Information box was rewritten to clarify that most projects will not behave properly when addon is enabled.
- **v1.36.0** Addon renamed to **Higher project framerate mode**. Addon's description and information box was rewritten for clarity.
- **v1.37.0** A second information box was added that explains issues with user devices' power saving mode.

## Trivia

- Although TurboWarp addons does not have this addon, Turbowarp's advanced project settings allows you to customize the project's framerate in a similar way.
- Despite the addon's setting for customizing the FPS is limited from 31 to 240, the Scratch project player is perfectly fine with values both lower and higher than these limits! There are several ways to bypass this limit, as only the setting's input field sets the limit.
- Jeffalo added the addon because "its hecking cool"
- There is a method that allows Scratch projects to roughly detect a custom FPS, which may indicate that the addon is enabled.

## Gallery

{{< docs/stub-section >}}

## Related

{{< docs/stub-section >}}
