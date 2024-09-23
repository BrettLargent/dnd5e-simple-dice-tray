<script>
  import { onMount, onDestroy, tick } from "svelte";
  import { slide } from "svelte/transition";
  import { chatString, dicePool, khl } from "./store";
  import DiceBtn from "./components/DiceBtn.svelte";

  export let isVisible = false;

  const dice = [4, 6, 8, 10, 12, 20, 100];
  const enterEvent = new KeyboardEvent("keydown", {
    code: "Enter",
    key: "Enter",
  });
  let chatMessage;

  function handleInputInput(event) {
    const value = event.target.value;
    if (value > 99) {
      dicePool.setMod(99);
      event.target.value = 99;
      return;
    }
    if (value < -99) {
      dicePool.setMod(-99);
      event.target.value = -99;
      return;
    }
    dicePool.setMod(value);
  }
  function handleInputKeydown(event) {
    if ({ ArrowLeft: 1, ArrowDown: 1 }[event.key]) {
      event.preventDefault();
      dicePool.decrementMod();
      return;
    }
    if ({ ArrowRight: 1, ArrowUp: 1 }[event.key]) {
      event.preventDefault();
      dicePool.incrementMod();
      return;
    }
  }
  function handleInputWheel({ deltaY }) {
    if (deltaY < 0) {
      dicePool.incrementMod();
      return;
    }
    dicePool.decrementMod();
  }
  function handleKhl(type) {
    if ($khl === type) {
      $khl = "";
      return;
    }
    $khl = type;
  }
  function handleRollClick() {
    chatMessage.dispatchEvent(enterEvent);
    khl.update(() => "");
    dicePool.clear();
  }
  async function toggleVisibility() {
    isVisible = !isVisible;

    if (isVisible) {
      await tick();
      feather.replace();
    }
  }

  $: {
    if ($dicePool.mod > 99) {
      dicePool.setMod(99);
    } else if ($dicePool.mod < -99) {
      dicePool.setMod(-99);
    }
  }
  $: {
    if (chatMessage) {
      chatMessage.value = $chatString;
    }
  }

  onMount(() => {
    chatMessage = document.querySelector("#chat-message");
    document
      .querySelector(".chat-control-icon")
      .addEventListener("click", toggleVisibility);

    feather.replace();
  });

  onDestroy(() => {
    document
      .querySelector(".chat-control-icon")
      .removeEventListener("click", toggleVisibility);
  });
</script>

{#if isVisible}
  <div id="dice-tray-container" transition:slide>
    <div id="dice-btn-row">
      {#each dice as die}
        <DiceBtn {die} />
      {/each}
    </div>
    <div id="dice-actions-row">
      <button class="dice-tray-btn" on:click={dicePool.clear}>Clear</button>
      <div class="dice-tray-kh-kl-container">
        <button
          class="dice-tray-btn {$khl === 'kh' ? 'active' : ''}"
          on:click={() => handleKhl("kh")}>Adv</button
        >
        <button
          class="dice-tray-btn {$khl === 'kl' ? 'active' : ''}"
          on:click={() => handleKhl("kl")}>dAdv</button
        >
      </div>
      <div
        class="dice-tray-input-container dice-tray-btn"
        on:wheel|preventDefault={handleInputWheel}
      >
        <input
          type="number"
          name="dice-tray-roll-mod"
          id="dice-tray-roll-mod"
          value={$dicePool.mod}
          on:keydown={handleInputKeydown}
          on:input={handleInputInput}
        />
        <div
          class="dice-tray-roll-mod-icon chevron-up"
          on:click={dicePool.incrementMod}
        >
          <i data-feather="chevron-up" />
        </div>
        <div
          class="dice-tray-roll-mod-icon chevron-down"
          on:click={dicePool.decrementMod}
        >
          <i data-feather="chevron-down" />
        </div>
      </div>
      <button class="dice-tray-btn" on:click={handleRollClick}>Roll</button>
    </div>
  </div>{/if}

<style lang="scss">
  :global(.chat-control-icon) {
    cursor: pointer;
  }

  :global(#foundry-vtt-dice-tray) {
    flex: unset;
  }

  #dice-tray-container {
    $dice-tray-grey-high: rgba(255, 255, 255, 0.87);
    $dice-tray-grey-medium: rgba(255, 255, 255, 0.6);
    $dice-tray-grey-low: rgba(255, 255, 255, 0.38);
    $dice-tray-red: #842029;
    padding: 5px;

    :global(*) {
      color: $dice-tray-grey-high;
    }

    #dice-btn-row {
      display: grid;
      grid-template-columns: repeat(7, calc(100% / 7));
      place-items: center;
      margin-bottom: 0.25rem;
    }

    #dice-actions-row {
      display: grid;
      grid-template-columns: repeat(4, 25%);

      .dice-tray-input-container {
        &::before {
          content: "";
          position: absolute;
          border: 1px solid $dice-tray-grey-low;
          border-radius: 0.25rem;
          top: 50%;
          left: 33%;
          width: 50%;
          height: 75%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        #dice-tray-roll-mod {
          width: 100%;
          height: 100%;
          background-color: transparent;
          border: 0;
          text-align: left;
          padding-left: 1rem;

          /* Chrome, Safari, Edge, Opera */
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          /* Firefox */
          &[type="number"] {
            -moz-appearance: textfield;
          }
        }

        .dice-tray-roll-mod-icon {
          position: absolute;
          right: 0.25rem;
          user-select: none;

          &:hover {
            background-color: rgba(255, 255, 255, 0.16);
            border-radius: 0.25rem;
          }

          &.chevron-up {
            top: 0;
          }

          &.chevron-down {
            bottom: 0;
          }

          &,
          :global(svg) {
            width: 18px;
            height: 18px;
          }
        }
      }
      .dice-tray-kh-kl-container {
        display: flex;
        flex-direction: column;

        .dice-tray-btn {
          flex: 0.5;
        }
      }
    }

    :global(.dice-tray-btn) {
      line-height: unset;
      cursor: pointer;
      position: relative;
      width: 100%;
      height: 2.625rem;

      border-radius: 0.25rem;
      border: 1px solid $dice-tray-red;
      background-color: #131313;
      border-bottom: 1px solid $dice-tray-red;
      box-shadow: 0 0 10px $dice-tray-red;

      &.active {
        background-color: $dice-tray-red;
      }

      &::after {
        content: "";
        border-radius: 0.25rem;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        opacity: 12%;
        pointer-events: none;
      }

      &:hover::after {
        opacity: 16%;
      }

      &:focus {
        box-shadow: 0 0 5px red;

        &::after {
          opacity: 23%;
        }
      }
    }
  }
</style>
