<script src="/data.js"></script>

<script>
  function get_fam_by_id(id = -1) {
    if (!fam_ids.includes(id)) { return null; }
    var index = ((id >= fams.length) ? fams.length : id);

    // Index should be close to id
    while (index > 0 && index < fams.length) {
      if (fams[index][0] == id) { return fams[index]; }
      if (fams[index][0] > id) {
        index--;
      } else {
        index++;
      }
    }

    // Backup search (
    for(var i = 0; i < fams.length; i++) {
      if (fams[index][0] == id) { return fams[index]; }
    }
    return null;
  }

  function get_fam_by_name(name = "") {
    if (name.length < 2) { return null; }
    name = name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();
    for(var i = 0; i < fams.length; i++) {
      if (fams[index][1].localeCompare(name)) { return fams[index]; }
    }
    return null;
  }

  function get_next_fam(id = -1) {
    var index = fams.indexOf(id);
    if (id == -1) { return fams[1]; }
    return ((id == (fams.length - 1)) ? 1 : (id + 1));
  }
</script>
