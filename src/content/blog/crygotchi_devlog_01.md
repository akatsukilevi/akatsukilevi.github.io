---
title: 'Crygotchi Devlog #01: I swear I'm still alive'
description: 'I just forgot to update the devlog'
pubDate: 'May 10 2023'
heroImage: '/blog/devlog_01/01_cover.png'
---

Yeah, I kinda screwed up and forgot that there's a damn Devlog I should be updating weekly... My honor, I declare Oopsie.

Anyway, quite a lot has been happening in the land of Crygotchi, and I'm here to share how things are going so far!

## In a nutshell

If you're the kind of people who skip straight into the TL;DR, there it is:

1. Ends up Bevy is not the best choice at the moment, so switched to Godot
2. We got our first PR on GitHub!
3. Initial work for the Room has been implemented
4. Working storage system!

## 1. How in the world is Bevy not the best choice??

Don't get me wrong, Bevy is awesome and I really enjoyed working with it. My issue with Bevy is more of a development time limitation. It demands a lot more coding in order to get simpler things working, and with such, development difficulty grew heavily.

For this reason, I had to re-think about the choice engine. I wanted something that could allow the game to be truly open-source, so Unity was out of the table. I also wanted the game to be lightweight, so Unreal was also out of the table(not to count the fact my computer can't even handle it... Celeron gang).

With this in mind, Godot came down as a true savior. With the recent release of Godot 4.0, it was a no-brainer. What mostly surprised me was how the C# support was just that good, and how I could translate a lot of the previous Unity version(yes, there was a Unity version before the Rust version) back into Godot, which really sped things up.

The Godot version is currently available [here](https://github.com/akatsukilevi/crygotchi)!

![01_img1.png](/blog/devlog_01/01_img1.png)

## 2. Our first PR!

And first blood [PR](https://github.com/akatsukilevi/crygotchi/pull/1) goes to [valkyrienyanko](https://github.com/valkyrienyanko)! Really can't express how thankful I am for it, even if it is a small minor clean-up PR, it still helps a ton!

![01_img2.png](/blog/devlog_01/01_img2.png)

With around 25 files changed, It mostly consisted on fixing some minor code mistakes and adding namespaces to the codebase, but it quite helped a lot!

The only changed that had to be reverted was changing from `net6.0` to `net7.0`. We don't know yet if Godot support for `net7.0` is stable, so it was decided to play it safe and keep on `net6.0`. Hopefully, once it's well known that it is stable, we can migrate to `net7.0`!

## 3. Initial work for the Room has been implemented

Yep! We currently have working cursor, adding/removing tiles, adding/removing decorations and interacting with interactive decorations

The best part is how all decorations and tiles are simply resources that are loaded on startup, so this opens up later on for modding capabilities in the game.

![01_img3.png](/blog/devlog_01/01_img3.png)

To implement custom types of decorations/tiles, it can simply be extended as a new class, considering that the base decoration/tile is a abstract class that works as a data capsule of sorts:

```cs
public partial class RoomTile : Resource
{
    [ExportCategory("Metadata")]
    [Export] public string Name;
    [Export] public string Description;
    [Export] public Texture2D Icon;

    [ExportCategory("Store")]
    [Export] public bool Purchasable = true;
    [Export] public int Cost = 10;

    [ExportCategory("Visual")]
    [Export] public Color Color = new() { R = 1, G = 1, B = 1, A = 1 };

    private string _id;

    public RoomTile Setup(string id)
    {
        this._id = id;
        return this;
    }

    public string GetId()
    {
        return this._id;
    }
}
```

## 4. Working storage system!

Now you can have 999 chests full of berries, because why not!

Seriously, joke aside, the storage system is nothing more than just a tile decoration:

```cs
using System.Collections.Generic;

public partial class ChestDecorationInstance : RoomTileDecorationInstance
{
    private readonly List<ItemEntry> _items = new();

    public void AddItem(Item item)
    {
        int existingIndex = this._items.FindIndex(x => x.Id == item.GetId());
        if (existingIndex != -1)
        {
            //* Already exists, increase the amount
            GD.Print($"Found existing item {item.GetId()}, increasing amount to {this._items[existingIndex].Amount + 1}");
            this._items[existingIndex].Amount += 1;
            return;
        }

        //* Does not exist, add one
        GD.Print($"Couldn't find existing item {item.GetId()}, adding new");
        this._items.Add(new ItemEntry()
        {
            Id = item.GetId(),
            Item = item,
            Amount = 1
        });
    }

    public ItemEntry[] GetItems()
    {
        return this._items.ToArray();
    }

    public Item TakeItem(string id)
    {
        //* Get the index of it
        int existingIndex = this._items.FindIndex(x => x.Id == id);
        if (existingIndex == -1)
        {
            GD.PushError("Could not find item " + id);
            return null;
        }

        //* Grab the item
        var item = this._items[existingIndex].Item;

        //* Reduce it's amount and remove if it's empty
        this._items[existingIndex].Amount -= 1;
        if (this._items[existingIndex].Amount <= 0) this._items.RemoveAt(existingIndex);

        //* Return it from the grabbed instance
        return item;
    }
}

public class ItemEntry
{
    public string Id { get; set; }
    public Item Item { get; set; }
    public int Amount { get; set; }
}

```

Since it's goal is simply to store a list of Items(which also are resources just like Tiles and Decorations), the whole system is rather simple.

It also counts with a simple interaction script that detects if the cursor is holding a item, and store it on it's item list if it is:

```cs
public override void Interact(RoomTileDecorationInstance instance, Node source)
{
	var chest = (ChestDecorationInstance)instance;

	//* Get the cursor state if it is missing
	this._cursorState ??= source.GetNode<CursorState>("/root/CursorState");

	//* Is cursor holding something?
	if (this._cursorState.IsHoldingItem())
	{
		//* If yes, add to the inventory and remove from cursor
		GD.Print("Cursor is holding a item and opened storage, transferring item");

		var item = this._cursorState.TakeItem();
		GD.Print($"Got item {item} from cursor");

		chest.AddItem(item);
		return;
	}

	//* If no, open the inventory UIs
	GD.Print("Cursor is not holding a item and opened storage, opening popup");
	var popup = GD.Load<PackedScene>("res://components/storage/ui/storage_popup.tscn").Instantiate<StoragePopup>();
	var root = source.GetTree().Root;
	popup.Ready += () => popup.Setup(chest);

	root.AddChild(popup);
}
```

## Conclusion thoughts

So far, development is going rather smoothly! The current goal is to get the core-most gameplay elements before starting to work on the actual game loop.

2 out of the 5 core systems(Building, Storage, Farming, Shopping, Minigames) are currently finished, and work is steadily going to finish all of them. Once they are done, we can start focusing on the hub and the actual gameplay loop!
