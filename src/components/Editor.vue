<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import { Icon } from '@iconify/vue'

const editor = useEditor({
  content: '<p>본문만 스크롤이 되는 구조 에디터</p>',
  extensions: [StarterKit, Underline],
  editorProps: {
    attributes: {
      class: 'tiptap',
      spellcheck: 'false',
    },
  },
})

const cmd = (name: string) => {
  // chain 함수들을 문자열로 호출하는 방식
  // 타입에 엄격하면 아래처럼 any 캐스팅해서 간단히 씀
  const e: any = editor.value
  e?.chain().focus()[name]().run()
}

const setHeading = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
  editor.value?.chain().focus().toggleHeading({ level }).run()
}

const isActive = (name: string, attrs?: Record<string, any>) => {
  return editor.value?.isActive(name, attrs) ?? false
}

const isHeaderDropdown = ref(false)
const showHeaderDropdown = () => {
  isHeaderDropdown.value = !isHeaderDropdown.value
}
const isAnyHeadingActive = computed(() => {
  if (!editor.value) return false
  for (let level = 1; level <= 6; level++) {
    if (editor.value.isActive('heading', { level })) {
      return true
    }
  }
  return false
})
onBeforeMount(() => editor.value?.destroy())
</script>
<template>
  <div class="editor-wrap">
    <div class="toolbar">
      <button
        :class="{ on: isActive('bold') }"
        type="button"
        @click="cmd('toggleBold')">
        B
      </button>
      <button
        :class="{ on: isActive('italic') }"
        type="button"
        @click="cmd('toggleItalic')">
        I
      </button>
      <button
        :class="{ on: isActive('underline') }"
        type="button"
        @click="cmd('toggleUnderline')">
        U
      </button>
      <button
        :class="{ on: isActive('strike') }"
        type="button"
        @click="cmd('toggleStrike')">
        S
      </button>
      <span class="separation" />
      <div class="header-wrap" @click="showHeaderDropdown">
        <button type="button" :class="{ on: isAnyHeadingActive }">
          Header&nbsp;
          <Icon
            class="chevron"
            icon="teenyicons:down-solid"
            :class="{ 'is-open': isHeaderDropdown }"
            width="8"
            height="8"></Icon>
        </button>
        <div
          class="header menu"
          :style="{ display: isHeaderDropdown ? 'block' : 'none' }">
          <button
            :class="{ on: isActive('heading', { level: 1 }) }"
            type="button"
            @click="setHeading(1)">
            H1
          </button>
          <button
            :class="{ on: isActive('heading', { level: 2 }) }"
            type="button"
            @click="setHeading(2)">
            H2
          </button>
          <button
            :class="{ on: isActive('heading', { level: 3 }) }"
            type="button"
            @click="setHeading(3)">
            H3
          </button>
          <button
            :class="{ on: isActive('heading', { level: 4 }) }"
            type="button"
            @click="setHeading(4)">
            H4
          </button>
          <button
            :class="{ on: isActive('heading', { level: 5 }) }"
            type="button"
            @click="setHeading(5)">
            H5
          </button>
          <button
            :class="{ on: isActive('heading', { level: 6 }) }"
            type="button"
            @click="setHeading(6)">
            H6
          </button>
        </div>
      </div>
      <span class="separation" />
      <button
        :class="{ on: isActive('bulletList') }"
        @click="cmd('toggleBulletList')">
        • List
      </button>
      <button
        :class="{ on: isActive('orderedList') }"
        @click="cmd('toggleOrderedList')">
        1. List
      </button>
      <button
        :class="{ on: isActive('taskList') }"
        @click="cmd('toggleTaskList')">
        ☑
      </button>
      <span class="separation" />
    </div>
    <div class="body-scroll">
      <EditorContent v-if="editor" :editor="editor" class="content" />
    </div>
    <div class="footer"></div>
  </div>
</template>

<style scoped lang="scss">
.editor-wrap {
  border: 1px solid green;
  .toolbar {
    display: flex;
    gap: 4px 8px;
    padding: 4px;
    background: var(--grey-2);
    button {
      &.on {
        background: var(--grey-6);
        color: var(--grey-1);
      }
    }
    .separation {
      margin: 0 4px;
      height: inherit;
      width: 1px;
      background: var(--grey-4);
    }
    .header-wrap {
      position: relative;
      .chevron {
        transition: transform 0.2s ease-out;
        transform: rotate(0deg);
        &.is-open {
          transform: rotate(180deg);
        }
      }
      .menu {
        z-index: 1;
        position: absolute;
        display: flex;
        flex-direction: column;
        column-gap: 4px;
        top: 30px;
        background: white;

        button {
          width: 100%;
          border-radius: 0;
        }
      }
    }
  }
  .body-scroll {
    border: 1px solid lime;
    // flex: 1;
    // overflow: auto;
    .content {
      // padding: 12px;
    }
  }
  .footer {
    border: 1px solid blue;
  }
}
</style>
