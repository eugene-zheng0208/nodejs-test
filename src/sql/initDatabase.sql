CREATE TABLE Example (
    field1 VARCHAR PRIMARY KEY,
    field2 INTEGER
);

-- test data for the test endpoint
INSERT INTO Example VALUES ("key1", 12);
INSERT INTO Example VALUES ("key2", 96);

-- making sure that test data has been inserted
SELECT * FROM Example;
