<template>
    <section>
      <ul class="sidebar">
        <li class="sidebar-header">About</li>
        <li><p>{{about}}</p></li>
        <li class="sidebar-header">Education</li>
        <li>
          <ul class="education">
            <li v-for="item in education">
              <p>
                <span class="school">{{item.school}}</span>
                <span class="city">{{item.city}}</span>
              </p>
              <ul>
                <li v-for="degree in item.degrees">
                  <span class="degree">{{degree.degree}}</span>
                  <span class="majors">{{degree.subjects.join(', ')}}, {{degree.year}}</span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="sidebar-header">Tools</li>
        <li>
          <ul class="tools">
            <li v-for="item in tools">

              <div class="tags">
                <span class="tag column leader">{{item.subject}}</span>
                <span v-for="tag in item.tags" class="tag column">{{tag}}</span>
              </div>
            </li>
          </ul>
        </li>
        <li class="sidebar-header">Languages</li>
        <li>
          <ul class="languages">
            <li v-for="item in languages">
              <div class="tags">
                <span class="tag leader">{{item.status}}</span>
                <span v-for="tag in item.languages" class="tag">{{tag}}</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </section>
</template>

<script>
export default {
  name: 'left-nav',
  props: ['education', 'tools', 'languages', 'about'],
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    font-size: 12px;
    max-width: 220px;
  }
  li {
    padding-left: 0.3em;
  }
  li.sidebar-header {
    font-size: 16px;
    font-weight: bolder;
    text-transform: capitalize;
    color: darkcyan;
    border-bottom: 1px solid purple;
    margin-top: 1em;
  }
  li.sidebar-header:first-child {
    margin-top: 0;
  }
  p {
    justify-content: space-between;
  }
  .school {
    font-weight: bolder;
    margin-bottom: 0;
    font-size: 14px;
  }
  .city {
    font-size: 14px;
    line-height: 12px;
    margin-top: 0;
  }
  .degree {
    font-weight: bold;
    min-width: 2.5em;
    text-align: right;
    display: inline-block;
  }
  img {
    height: 60px;
    width: 60px;
    border-radius: 45px;
    display: block;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    max-width: 180px;
    align-content: flex-start;
    align-items: space-between;
    justify-content: flex-start;
    margin-top: 0.5em;
  }
  .tag {
    flex: 0 0 0px;
    align-self: center;
    padding: 0.5em;
    margin: 0.3em;
    background: lightblue;
    border-radius: 0.5em;
    color: purple;
  }
  .tag.leader {
    font-weight: bolder;
    background: none;
    color: black;
  }
  .tag:after, {
    content: ", "
  }
  .tag:last-child:after, .tag.leader:after {
    content: "";
  }
</style>
